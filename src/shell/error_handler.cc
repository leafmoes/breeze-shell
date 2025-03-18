#include "error_handler.h"

#include <exception>
#include <format>
#include <fstream>
#include <ios>
#include <iostream>
#include <sstream>
#include <string>

#include "build_info.h"
#include "config.h"

#include "utils.h"

#include "Windows.h"
#include <DbgHelp.h>

void show_console() {
  if (!GetConsoleWindow()) {
    AllocConsole();
    freopen("CONOUT$", "w", stdout);
    freopen("CONOUT$", "w", stderr);
  }
  ShowWindow(GetConsoleWindow(), SW_SHOW);
  SetForegroundWindow(GetConsoleWindow());
}

inline void output_crash_header(std::stringstream &ss) {
  ss << "Breeze Shell " << BREEZE_VERSION << " crash report" << std::endl;
  ss << "----------------------------------------" << std::endl;
  ss << "Build date: " << BREEZE_BUILD_DATE_TIME << std::endl;
  ss << "Git commit hash: " << BREEZE_GIT_COMMIT_HASH << std::endl;
  ss << "Commit page: https://github.com/std-microblock/breeze-shell/commit/"
     << BREEZE_GIT_COMMIT_HASH << std::endl;
  ss << "Git branch: " << BREEZE_GIT_BRANCH_NAME << std::endl;
  ss << "Data directory: " << mb_shell::config::data_directory() << std::endl;
  ss << "Windows version: "
     << (mb_shell::is_win11_or_later() ? "11 or later" : "10 or earlier")
     << std::endl;
  ss << "----------------------------------------" << std::endl;
  ss << "Config:" << std::endl;
  ss << mb_shell::config::dump_config() << std::endl;
  ss << "----------------------------------------" << std::endl;
}

std::wstring GetBacktrace(CONTEXT *contextRecord) {
  std::wstring info;
  wchar_t symbol_mem[sizeof(IMAGEHLP_SYMBOL64) + 256];
  auto symbol = (IMAGEHLP_SYMBOL64 *)symbol_mem;

  // Initialize the symbol handler
  SymInitialize(GetCurrentProcess(), nullptr, TRUE);

  // Initialize the stack frame
  STACKFRAME64 stackFrame = {0};

#ifdef _WIN64
  stackFrame.AddrPC.Offset = contextRecord->Rip;
  stackFrame.AddrPC.Mode = AddrModeFlat;
  stackFrame.AddrFrame.Offset = contextRecord->Rbp;
  stackFrame.AddrFrame.Mode = AddrModeFlat;
  stackFrame.AddrStack.Offset = contextRecord->Rsp;
  stackFrame.AddrStack.Mode = AddrModeFlat;
#else
  stackFrame.AddrPC.Offset = contextRecord->Eip;
  stackFrame.AddrPC.Mode = AddrModeFlat;
  stackFrame.AddrFrame.Offset = contextRecord->Ebp;
  stackFrame.AddrFrame.Mode = AddrModeFlat;
  stackFrame.AddrStack.Offset = contextRecord->Esp;
  stackFrame.AddrStack.Mode = AddrModeFlat;
#endif

  DWORD64 displacement = 0;
  // Walk the call stack and append each frame to the string
  while (StackWalk64(
#ifdef _WIN64
      IMAGE_FILE_MACHINE_AMD64
#else
      IMAGE_FILE_MACHINE_I386
#endif

      ,
      GetCurrentProcess(), GetCurrentThread(), &stackFrame, contextRecord,
      nullptr, SymFunctionTableAccess64, SymGetModuleBase64, nullptr)) {
    // Get the module name and offset for this frame
    DWORD64 moduleBase =
        SymGetModuleBase64(GetCurrentProcess(), stackFrame.AddrPC.Offset);
    wchar_t moduleName[MAX_PATH];
    GetModuleFileNameW((HMODULE)moduleBase, moduleName, MAX_PATH);
    DWORD64 offset = stackFrame.AddrPC.Offset - moduleBase;

    symbol->SizeOfStruct = sizeof(IMAGEHLP_SYMBOL64);
    symbol->MaxNameLength = 255;

    wchar_t name[256] = {};
    SymGetSymFromAddr64(GetCurrentProcess(), stackFrame.AddrPC.Offset,
                        &displacement, symbol);

    DWORD dwDisplacement;
    IMAGEHLP_LINE64 line;

    SymGetLineFromAddr64(GetCurrentProcess(), stackFrame.AddrPC.Offset,
                         &dwDisplacement, &line);

    UnDecorateSymbolNameW(mb_shell::utf8_to_wstring(symbol->Name).c_str(), name,
                          256, UNDNAME_COMPLETE);

    // Append the frame to the string
    wchar_t frameInfo[1024];
    swprintf_s(frameInfo, L"%s + %I64X", moduleName, offset);
    info += std::wstring(frameInfo) + std::wstring(L"(") + std::wstring(name) +
            std::wstring(L") at line ") + std::to_wstring(line.LineNumber) + L"\n";
  }

  // Cleanup the symbol handler
  SymCleanup(GetCurrentProcess());

  // Return the backtrace string
  return info;
}

std::string GetExceptionName(EXCEPTION_POINTERS *ExceptionInfo) {
  std::string exceptionName;
  switch (ExceptionInfo->ExceptionRecord->ExceptionCode) {
  case EXCEPTION_ACCESS_VIOLATION:
    exceptionName = "ACCESS_VIOLATION";
    break;
  case EXCEPTION_ARRAY_BOUNDS_EXCEEDED:
    exceptionName = "ARRAY_BOUNDS_EXCEEDED";
    break;
  case EXCEPTION_BREAKPOINT:
    exceptionName = "BREAKPOINT";
    break;
  case EXCEPTION_DATATYPE_MISALIGNMENT:
    exceptionName = "DATATYPE_MISALIGNMENT";
    break;
  case EXCEPTION_FLT_DENORMAL_OPERAND:
    exceptionName = "FLT_DENORMAL_OPERAND";
    break;
  case EXCEPTION_FLT_DIVIDE_BY_ZERO:
    exceptionName = "FLT_DIVIDE_BY_ZERO";
    break;
  case EXCEPTION_FLT_INEXACT_RESULT:
    exceptionName = "FLT_INEXACT_RESULT";
    break;
  case EXCEPTION_FLT_INVALID_OPERATION:
    exceptionName = "FLT_INVALID_OPERATION";
    break;
  case EXCEPTION_FLT_OVERFLOW:
    exceptionName = "FLT_OVERFLOW";
    break;
  case EXCEPTION_FLT_STACK_CHECK:
    exceptionName = "FLT_STACK_CHECK";
    break;
  case EXCEPTION_FLT_UNDERFLOW:
    exceptionName = "FLT_UNDERFLOW";
    break;
  case EXCEPTION_ILLEGAL_INSTRUCTION:
    exceptionName = "ILLEGAL_INSTRUCTION";
    break;
  case EXCEPTION_IN_PAGE_ERROR:
    exceptionName = "IN_PAGE_ERROR";
    break;
  case EXCEPTION_INT_DIVIDE_BY_ZERO:
    exceptionName = "INT_DIVIDE_BY_ZERO";
    break;
  case EXCEPTION_INT_OVERFLOW:
    exceptionName = "INT_OVERFLOW";
    break;
  case EXCEPTION_INVALID_DISPOSITION:
    exceptionName = "INVALID_DISPOSITION";
    break;
  case EXCEPTION_NONCONTINUABLE_EXCEPTION:
    exceptionName = "NONCONTINUABLE_EXCEPTION";
    break;
  case EXCEPTION_PRIV_INSTRUCTION:
    exceptionName = "PRIV_INSTRUCTION";
    break;
  case EXCEPTION_SINGLE_STEP:
    exceptionName = "SINGLE_STEP";
    break;
  case EXCEPTION_STACK_OVERFLOW:
    exceptionName = "STACK_OVERFLOW";
    break;
  default:
    exceptionName = "UNKNOWN";
    break;
  }
  return exceptionName;
}

void mb_shell::install_error_handlers() {
  SetUnhandledExceptionFilter([](PEXCEPTION_POINTERS ex) -> LONG {
    show_console();

    std::ofstream file(config::data_directory().string() +
                       "\\crash_report.txt");

    std::stringstream ss;
    output_crash_header(ss);
    ss << "Exception code: " << std::hex << ex->ExceptionRecord->ExceptionCode
       << "(" << GetExceptionName(ex) << ")" << std::endl;
    ss << "Exception flags: " << std::hex << ex->ExceptionRecord->ExceptionFlags
       << std::endl;
    ss << "Exception address: " << std::hex
       << ex->ExceptionRecord->ExceptionAddress << std::endl;
    ss << "Registers:" << std::endl;

    ss << "RAX: " << std::hex << ex->ContextRecord->Rax << std::endl;
    ss << "RBX: " << std::hex << ex->ContextRecord->Rbx << std::endl;
    ss << "RCX: " << std::hex << ex->ContextRecord->Rcx << std::endl;
    ss << "RDX: " << std::hex << ex->ContextRecord->Rdx << std::endl;
    ss << "R8: " << std::hex << ex->ContextRecord->R8 << std::endl;
    ss << "R9: " << std::hex << ex->ContextRecord->R9 << std::endl;
    ss << "R10: " << std::hex << ex->ContextRecord->R10 << std::endl;
    ss << "R11: " << std::hex << ex->ContextRecord->R11 << std::endl;
    ss << "R12: " << std::hex << ex->ContextRecord->R12 << std::endl;
    ss << "R13: " << std::hex << ex->ContextRecord->R13 << std::endl;
    ss << "R14: " << std::hex << ex->ContextRecord->R14 << std::endl;
    ss << "R15: " << std::hex << ex->ContextRecord->R15 << std::endl;
    ss << "RDI: " << std::hex << ex->ContextRecord->Rdi << std::endl;
    ss << "RSI: " << std::hex << ex->ContextRecord->Rsi << std::endl;
    ss << "RBP: " << std::hex << ex->ContextRecord->Rbp << std::endl;
    ss << "RSP: " << std::hex << ex->ContextRecord->Rsp << std::endl;
    ss << "RIP: " << std::hex << ex->ContextRecord->Rip << std::endl;

    ss << "Stack trace:" << std::endl;
    ss << wstring_to_utf8(GetBacktrace(ex->ContextRecord)) << std::endl;

    if (file.is_open()) {
      file << ss.str();
      file.flush();
      file.close();
    }
    std::cerr << ss.str();

    Sleep(5000);
    return EXCEPTION_CONTINUE_EXECUTION;
  });

  std::set_terminate([]() {
    show_console();

    std::stringstream ss;
    output_crash_header(ss);
    try {
      throw std::current_exception();
    } catch (const std::exception &e) {
      ss << "Uncaught exception: " << e.what() << std::endl;
    } catch (...) {
      ss << "Uncaught exception of unknown type" << std::endl;
    }

    CONTEXT ctx;
    RtlCaptureContext(&ctx);
    ss << "Stack trace:" << std::endl;
    ss << wstring_to_utf8(GetBacktrace(&ctx)) << std::endl;

    std::ofstream file(config::data_directory().string() +
                       "\\crash_report.txt");

    if (file.is_open()) {
      file << ss.str();
      file.flush();
      file.close();
    }

    std::cerr << ss.str();

    Sleep(5000);
  });
}
