// This file is generated by scripts/bindgen/index.ts
// Do not modify this file manually!

declare module 'mshell' {


export class example_struct_jni {
	a: number
	b: number
	c: string
	
/**
  * 
  * @param a: number, b: number
  * @returns number
  */
  add1: ((arg1: number, arg2: number) => number)
            
	
/**
  * 
  * @param a: string, b: string
  * @returns number | string
  */
  add2: ((arg1: string, arg2: string) => number | string)
            
}
    
export class folder_view_controller {
	
  /**
  * 当前文件夹路径
  *  Current folder path
  */
  current_path: string
            
	
  /**
  * 当前焦点文件路径
  *  Currently focused file path
  */
  focused_file_path: string
            
	
  /**
  * 选中的文件列表
  *  List of selected files
  */
  selected_files: Array<string>
            
	
/**
  * 切换到新文件夹
  *  Change to a new folder
  * @param new_folder_path: string
  * @returns void
  */
  change_folder: ((arg1: string) => void)
            
	
/**
  * 聚焦到指定文件
  *  Focus on specified file
  * @param file_path: string
  * @returns void
  */
  focus_file: ((arg1: string) => void)
            
	
/**
  * 打开文件
  *  Open a file
  * @param file_path: string
  * @returns void
  */
  open_file: ((arg1: string) => void)
            
	
/**
  * 打开文件夹
  *  Open a folder
  * @param folder_path: string
  * @returns void
  */
  open_folder: ((arg1: string) => void)
            
	
/**
  * 滚动到指定文件
  *  Scroll to specified file
  * @param file_path: string
  * @returns void
  */
  scroll_to_file: ((arg1: string) => void)
            
	
/**
  * 刷新视图
  *  Refresh view
  * @param 
  * @returns void
  */
  refresh: (() => void)
            
	
/**
  * 全选
  *  Select all items
  * @param 
  * @returns void
  */
  select_all: (() => void)
            
	
/**
  * 取消全选
  *  Deselect all items
  * @param 
  * @returns void
  */
  select_none: (() => void)
            
	
/**
  * 反选
  *  Invert selection
  * @param 
  * @returns void
  */
  invert_selection: (() => void)
            
	
/**
  * 复制
  *  Copy selected items
  * @param 
  * @returns void
  */
  copy: (() => void)
            
	
/**
  * 剪切
  *  Cut selected items
  * @param 
  * @returns void
  */
  cut: (() => void)
            
	
/**
  * 粘贴
  *  Paste items
  * @param 
  * @returns void
  */
  paste: (() => void)
            
}
    
export class value_reset {
	
	
}
    
export class window_titlebar_controller {
	
  /**
  * 是否在标题栏中点击
  *  Whether click is in titlebar
  */
  is_click_in_titlebar: boolean
            
	
  /**
  * 窗口标题
  *  Window title
  */
  title: string
            
	
  /**
  * 可执行文件路径
  *  Executable path
  */
  executable_path: string
            
	hwnd: number
	
  /**
  * 窗口位置和大小
  *  Window position and size
  */
  x: number
            
	y: number
	width: number
	height: number
	
  /**
  * 窗口状态
  *  Window state
  */
  maximized: boolean
            
	minimized: boolean
	focused: boolean
	visible: boolean
	
/**
  * 设置窗口标题
  *  Set window title
  * @param new_title: string
  * @returns void
  */
  set_title: ((arg1: string) => void)
            
	
/**
  * 设置窗口图标
  *  Set window icon
  * @param icon_path: string
  * @returns void
  */
  set_icon: ((arg1: string) => void)
            
	
/**
  * 设置窗口位置
  *  Set window position
  * @param new_x: number, new_y: number
  * @returns void
  */
  set_position: ((arg1: number, arg2: number) => void)
            
	
/**
  * 设置窗口大小
  *  Set window size
  * @param new_width: number, new_height: number
  * @returns void
  */
  set_size: ((arg1: number, arg2: number) => void)
            
	
/**
  * 最大化窗口
  *  Maximize window
  * @param 
  * @returns void
  */
  maximize: (() => void)
            
	
/**
  * 最小化窗口
  *  Minimize window
  * @param 
  * @returns void
  */
  minimize: (() => void)
            
	
/**
  * 还原窗口
  *  Restore window
  * @param 
  * @returns void
  */
  restore: (() => void)
            
	
/**
  * 关闭窗口
  *  Close window
  * @param 
  * @returns void
  */
  close: (() => void)
            
	
/**
  * 聚焦窗口
  *  Focus window
  * @param 
  * @returns void
  */
  focus: (() => void)
            
	
/**
  * 显示窗口
  *  Show window
  * @param 
  * @returns void
  */
  show: (() => void)
            
	
/**
  * 隐藏窗口
  *  Hide window
  * @param 
  * @returns void
  */
  hide: (() => void)
            
}
    
export class input_box_controller {
	
  /**
  * 输入框文本
  *  Input box text
  */
  text: string
            
	
  /**
  * 占位符文本
  *  Placeholder text
  */
  placeholder: string
            
	
  /**
  * 是否多行
  *  Whether multiline
  */
  multiline: boolean
            
	
  /**
  * 是否密码框
  *  Whether password field
  */
  password: boolean
            
	
  /**
  * 是否只读
  *  Whether readonly
  */
  readonly: boolean
            
	
  /**
  * 是否禁用
  *  Whether disabled
  */
  disabled: boolean
            
	
  /**
  * 输入框位置和大小
  *  Input box position and size
  */
  x: number
            
	y: number
	width: number
	height: number
	
/**
  * 设置文本
  *  Set text
  * @param new_text: string
  * @returns void
  */
  set_text: ((arg1: string) => void)
            
	
/**
  * 设置占位符
  *  Set placeholder
  * @param new_placeholder: string
  * @returns void
  */
  set_placeholder: ((arg1: string) => void)
            
	
/**
  * 设置位置
  *  Set position
  * @param new_x: number, new_y: number
  * @returns void
  */
  set_position: ((arg1: number, arg2: number) => void)
            
	
/**
  * 设置大小
  *  Set size
  * @param new_width: number, new_height: number
  * @returns void
  */
  set_size: ((arg1: number, arg2: number) => void)
            
	
/**
  * 设置是否多行
  *  Set multiline state
  * @param new_multiline: boolean
  * @returns void
  */
  set_multiline: ((arg1: boolean) => void)
            
	
/**
  * 设置是否为密码框
  *  Set password field state
  * @param new_password: boolean
  * @returns void
  */
  set_password: ((arg1: boolean) => void)
            
	
/**
  * 设置是否只读
  *  Set readonly state
  * @param new_readonly: boolean
  * @returns void
  */
  set_readonly: ((arg1: boolean) => void)
            
	
/**
  * 设置是否禁用
  *  Set disabled state
  * @param new_disabled: boolean
  * @returns void
  */
  set_disabled: ((arg1: boolean) => void)
            
	
/**
  * 获取焦点
  *  Get focus
  * @param 
  * @returns void
  */
  focus: (() => void)
            
	
/**
  * 失去焦点
  *  Lose focus
  * @param 
  * @returns void
  */
  blur: (() => void)
            
	
/**
  * 全选文本
  *  Select all text
  * @param 
  * @returns void
  */
  select_all: (() => void)
            
	
/**
  * 选择文本范围
  *  Select text range
  * @param start: number, end: number
  * @returns void
  */
  select_range: ((arg1: number, arg2: number) => void)
            
	
/**
  * 设置选择范围
  *  Set selection range
  * @param start: number, end: number
  * @returns void
  */
  set_selection: ((arg1: number, arg2: number) => void)
            
	
/**
  * 插入文本
  *  Insert text
  * @param new_text: string
  * @returns void
  */
  insert_text: ((arg1: string) => void)
            
	
/**
  * 删除文本
  *  Delete text
  * @param start: number, end: number
  * @returns void
  */
  delete_text: ((arg1: number, arg2: number) => void)
            
	
/**
  * 清空文本
  *  Clear text
  * @param 
  * @returns void
  */
  clear: (() => void)
            
}
    
export class js_menu_action_event_data {
	
	
}
    
export class js_menu_data {
	
  /**
  * 菜单项类型
  *  Menu item type
  */
  type?: string | undefined
            
	
  /**
  * 菜单项名称
  *  Menu item name
  */
  name?: string | undefined
            
	submenu?: ((arg1: menu_controller) => void) | value_reset | undefined
	action?: ((arg1: js_menu_action_event_data) => void) | value_reset | undefined
	
  /**
  * SVG图标
  *  SVG icon
  */
  icon_svg?: string | value_reset | undefined
            
	
  /**
  * 位图图标
  *  Bitmap icon
  */
  icon_bitmap?: size_t | value_reset | undefined
            
	
  /**
  * 是否禁用
  *  Whether disabled
  */
  disabled?: boolean | undefined
            
	
  /**
  * 仅作为信息标识，不影响行为
  *  Only for information, set this changes nothing
  */
  wID?: int64_t | undefined
            
	name_resid?: string | undefined
	
}
    
export class menu_item_controller {
	
	
/**
  * 
  * @param new_index: number
  * @returns void
  */
  set_position: ((arg1: number) => void)
            
	
/**
  * 
  * @param data: js_menu_data
  * @returns void
  */
  set_data: ((arg1: js_menu_data) => void)
            
	
/**
  * 
  * @param 
  * @returns js_menu_data
  */
  data: (() => js_menu_data)
            
	
/**
  * 
  * @param 
  * @returns void
  */
  remove: (() => void)
            
	
/**
  * 
  * @param 
  * @returns boolean
  */
  valid: (() => boolean)
            
}
    
export class js_menu_context {
	folder_view?: folder_view_controller | undefined
	window_titlebar?: window_titlebar_controller | undefined
	input_box?: input_box_controller | undefined
	
}
    
export class menu_info_basic_js {
	menu: menu_controller
	context: js_menu_context
	
}
    
export class menu_controller {
	
	
/**
  * 检查菜单控制器是否有效
  *  Check if menu controller is valid
  * @param 
  * @returns boolean
  */
  valid: (() => boolean)
            
	
/**
  * 
  * @param data: js_menu_data, after_index: number
  * @returns menu_item_controller
  */
  append_menu_after: ((arg1: js_menu_data, arg2: number) => menu_item_controller)
            
	
/**
  * 
  * @param data: js_menu_data
  * @returns menu_item_controller
  */
  append_menu: ((arg1: js_menu_data) => menu_item_controller)
            
	
/**
  * 
  * @param data: js_menu_data
  * @returns menu_item_controller
  */
  prepend_menu: ((arg1: js_menu_data) => menu_item_controller)
            
	
/**
  * 关闭菜单
  *  Close menu
  * @param 
  * @returns void
  */
  close: (() => void)
            
	
/**
  * 清除所有菜单项
  *  Clear all menu items
  * @param 
  * @returns void
  */
  clear: (() => void)
            
	
/**
  * 获取所有菜单项
  *  Get all menu items
  * @param 
  * @returns Array<menu_item_controller>
  */
  get_items: (() => Array<menu_item_controller>)
            
	
/**
  * 获取指定索引的菜单项
  *  Get menu item at index
  * @param index: number
  * @returns menu_item_controller
  */
  get_item: ((arg1: number) => menu_item_controller)
            
	
/**
  * 添加菜单事件监听器
  *  Add menu event listener
  * @param listener: ((arg1: menu_info_basic_js) => void)
  * @returns (() => void)
  */
  static add_menu_listener: ((arg1: ((arg1: menu_info_basic_js) => void)) => (() => void))
            
}
    
export class clipboard {
	
	
/**
  * 从剪贴板获取文本
  *  Get text from clipboard
  * @param 
  * @returns string
  */
  static get_text: (() => string)
            
	
/**
  * 设置文本到剪贴板
  *  Set text to clipboard
  * @param text: string
  * @returns void
  */
  static set_text: ((arg1: string) => void)
            
}
    
export class network {
	
	
/**
  * 同步HTTP GET请求
  *  Synchronous HTTP GET request
  * @param url: string
  * @returns string
  */
  static get: ((arg1: string) => string)
            
	
/**
  * 同步HTTP POST请求
  *  Synchronous HTTP POST request
  * @param url: string, data: string
  * @returns string
  */
  static post: ((arg1: string, arg2: string) => string)
            
	
/**
  * 异步HTTP GET请求
  *  Asynchronous HTTP GET request
  * @param url: string, callback: ((arg1: string) => void), error_callback: ((arg1: string) => void)
  * @returns void
  */
  static get_async: ((arg1: string, arg2: ((arg1: string) => void), arg3: ((arg1: string) => void)) => void)
            
	
/**
  * 异步HTTP POST请求
  *  Asynchronous HTTP POST request
  * @param url: string, data: string, callback: ((arg1: string) => void), error_callback: ((arg1: string) => void)
  * @returns void
  */
  static post_async: ((arg1: string, arg2: string, arg3: ((arg1: string) => void), arg4: ((arg1: string) => void)) => void)
            
	
/**
  * 下载文件
  *  Download file
  * @param url: string, path: string, callback: (() => void), error_callback: ((arg1: string) => void)
  * @returns void
  */
  static download_async: ((arg1: string, arg2: string, arg3: (() => void), arg4: ((arg1: string) => void)) => void)
            
}
    
export class subproc_result_data {
	
  /**
  * 标准输出
  *  Standard output
  */
  out: string
            
	
  /**
  * 标准错误
  *  Standard error
  */
  err: string
            
	
  /**
  * 退出码
  *  Exit code
  */
  code: number
            
	
}
    
export class subproc {
	
	
/**
  * 同步运行命令
  *  Run command synchronously
  * @param cmd: string
  * @returns subproc_result_data
  */
  static run: ((arg1: string) => subproc_result_data)
            
	
/**
  * 异步运行命令
  *  Run command asynchronously
  * @param cmd: string, callback: ((arg1: subproc_result_data) => void)
  * @returns void
  */
  static run_async: ((arg1: string, arg2: ((arg1: subproc_result_data) => void)) => void)
            
}
    
export class fs {
	
	
/**
  * 获取当前工作目录
  *  Get current working directory
  * @param 
  * @returns string
  */
  static cwd: (() => string)
            
	
/**
  * 设置当前工作目录
  *  Set current working directory
  * @param path: string
  * @returns void
  */
  static chdir: ((arg1: string) => void)
            
	
/**
  * 判断路径是否存在
  *  Check if path exists
  * @param path: string
  * @returns boolean
  */
  static exists: ((arg1: string) => boolean)
            
	
/**
  * 创建目录
  *  Create directory
  * @param path: string
  * @returns void
  */
  static mkdir: ((arg1: string) => void)
            
	
/**
  * 删除目录
  *  Remove directory
  * @param path: string
  * @returns void
  */
  static rmdir: ((arg1: string) => void)
            
	
/**
  * 重命名文件或目录
  *  Rename file or directory
  * @param old_path: string, new_path: string
  * @returns void
  */
  static rename: ((arg1: string, arg2: string) => void)
            
	
/**
  * 删除文件
  *  Remove file
  * @param path: string
  * @returns void
  */
  static remove: ((arg1: string) => void)
            
	
/**
  * 复制文件
  *  Copy file
  * @param src_path: string, dest_path: string
  * @returns void
  */
  static copy: ((arg1: string, arg2: string) => void)
            
	
/**
  * 移动文件
  *  Move file
  * @param src_path: string, dest_path: string
  * @returns void
  */
  static move: ((arg1: string, arg2: string) => void)
            
	
/**
  * 读取文件
  *  Read file
  * @param path: string
  * @returns string
  */
  static read: ((arg1: string) => string)
            
	
/**
  * 写入文件
  *  Write file
  * @param path: string, data: string
  * @returns void
  */
  static write: ((arg1: string, arg2: string) => void)
            
	
/**
  * 以二进制模式读取文件
  *  Read file in binary mode
  * @param path: string
  * @returns Array<uint8_t>
  */
  static read_binary: ((arg1: string) => Array<uint8_t>)
            
	
/**
  * 以二进制模式写入文件
  *  Write file in binary mode
  * @param path: string, data: Array<uint8_t>
  * @returns void
  */
  static write_binary: ((arg1: string, arg2: Array<uint8_t>) => void)
            
	
/**
  * 读取目录
  *  Read directory
  * @param path: string
  * @returns Array<string>
  */
  static readdir: ((arg1: string) => Array<string>)
            
}
    
export class breeze {
	
	
/**
  * 
  * @param 
  * @returns string
  */
  static version: (() => string)
            
	
/**
  * 
  * @param 
  * @returns string
  */
  static data_directory: (() => string)
            
	
/**
  * 
  * @param 
  * @returns boolean
  */
  static is_light_theme: (() => boolean)
            
}
    
export class win32 {
	
	
/**
  * 
  * @param str: string
  * @returns string
  */
  static resid_from_string: ((arg1: string) => string)
            
	
/**
  * 
  * @param path: string
  * @returns size_t
  */
  static load_library: ((arg1: string) => size_t)
            
}
    
}
declare module "mshell" {
    export function println(...args: any[]);
    type size_t = number;
    type uint8_t = number;
    type uint16_t = number;
    type uint32_t = number;
    type uint64_t = number;
    type int8_t = number;
    type int16_t = number;
    type int32_t = number;
    type int64_t = number;
    type intptr_t = number;
    type uintptr_t = number;
    type ssize_t = number;
}

declare module "qjs:os" {
  import { Seek, Error } from "qjs:std";

  type Success = 0;
  type OSOperationResult = Success | Error;
  type OSOperationTuple = [str: string, error: OSOperationResult];
  type Callback = () => any;
  type TimeoutHandle = number;

  export interface File {
    close(): number;
    puts(str: string): void;
    printf(fmt: string, ...args: any[]): void;
    flush(): void;
    seek(offset: number, whence: Seek): number;
    tell(): number;
    tello(): BigInt;
    eof(): boolean | unknown;
    fileno(): unknown;
    error(): Error | unknown;
    clearerr(): void;
    read(buffer: ArrayBuffer, position: number, length: number): void;
    write(buffer: ArrayBuffer, position: number, length: number): void;
    getline(): string;
    readAsString(max_size?: number): string;
    getByte(): number;
    putByte(c: number): void;
  }

  export interface FileStatus {
    readonly dev: number;
    readonly ino: number;
    readonly mode: number;
    readonly nlink: number;
    readonly uid: number;
    readonly gid: number;
    readonly rdev: number;
    readonly size: number;
    readonly blocks: number;
    readonly atime: number;
    readonly mtime: number;
    readonly ctime: number;
  }

  export interface ExecOptions {
    block?: boolean;
    usePath?: boolean;
    file?: string;
    cwd?: string;
    stdin?: File;
    stdout?: File;
    stderr?: File;
    env?: { readonly [key: string]: string };
    uid?: number;
    gid?: number;
  }

  export class Worker {
    static parent: Worker;
    constructor(filename: string);
    postMessage(msg: any): void;
    onmessage: (data: any) => void | null;
  }

  export const SIGINT: 2;
  export const SIGABRT: 6;
  export const SIGFPE: 8;
  export const SIGILL: 4;
  export const SIGSEGV: 11;
  export const SIGTERM: 15;

  export const WNOHANG: 1;

  export const platform: "linux" | "darwin" | "win32" | "js";

  export const O_RDONLY: 0;
  export const O_WRONLY: 1;
  export const O_RDWR: 2;
  export const O_CREAT: 64;
  export const O_EXCL: 128;
  export const O_TRUNC: 512;
  export const O_APPEND: 1024;

  export function open(filename: string, flag: number, mode?: unknown): File | -1;
  export function close(file: File): number;
  export function seek(file: File, offset: number, whence: Seek): number;
  export function seek(
    file: File,
    offset: BigInt,
    whence: Seek
  ): BigInt;
  export function read(
    file: File,
    buffer: ArrayBuffer,
    offset: number,
    length: number
  ): number;
  export function write(
    file: File,
    buffer: ArrayBuffer,
    offset: number,
    length: number
  ): number;
  export function isatty(file: File): boolean;
  export function ttyGetWinSize(
    file: File
  ): [width: number, height: number] | null;
  export function ttySetRaw(file: File): void;
  export function remove(filename: string): OSOperationResult;
  export function rename(oldname: string, newname: string): OSOperationResult;
  export function realpath(path: string): OSOperationTuple;
  export function getcwd(): OSOperationTuple;
  export function chdir(path: string): OSOperationResult;
  export function mkdir(path: string, mode?: string): OSOperationResult;
  export function stat(path: string): [status: FileStatus, error: Error];
  export function lstat(path: string): [status: FileStatus, error: Error];
  export function utimes(
    path: string,
    atime: number,
    mtime: number
  ): OSOperationResult;
  export function symlink(target: string, linkpath: string): OSOperationResult;
  export function readlink(path: string): OSOperationTuple;
  export function readdir(path: string): [files: string[], error: Error];
  export function setReadHandler(file: File, cb: Callback | null): void;
  export function setReadHandler(file: File, cb: null): void;
  export function setWriteHandler(file: File, cb: Callback): void;
  export function setWriteHandler(file: File, cb: null): void;
  export function signal(signal: number, cb: Callback): void;
  export function signal(signal: number, cb: null): void;
  export function signal(signal: number, cb: undefined): void;
  export function kill(pid: number, signal: number): void;
  export function exec(args: string[], options?: ExecOptions): number;
  export function waitpid(
    pid: number,
    options: number
  ): [ret: unknown | Error, status: any];
  export function dup(file: File): void;
  export function dup2(oldFile: File, newFile: File): void;
  export function pipe(): [readFile: File, writeFile: File] | null;
  export function sleep(delay: number): void;
  export function setTimeout(cb: Callback, delay: number): TimeoutHandle;
  export function clearTimeout(handle: TimeoutHandle): void;
}

declare module "qjs:std" {
  import { File } from "qjs:os";

  export interface EvalOptions {
    backtrace_barrier?: boolean;
  }

  export interface ErrorOptions {
    errorno: Error;
  }

  export interface URLGetOptions {
    binary?: boolean;
    full?: boolean;
  }

  export interface URLGetResponse {
    readonly response: string | null;
    readonly responseHeaders: string;
    readonly status: number;
  }

  export const SEEK_SET: number; // 0
  export const SEEK_CUR: number; // 1
  export const SEEK_END: number; // 2

  export const S_IFMT: number;
  export const S_IFIFO: number;
  export const S_IFCHR: number;
  export const S_IFDIR: number;
  export const S_IFBLK: number;
  export const S_IFREG: number;
  export const S_IFSOCK: number;
  export const S_IFLNK: number;
  export const S_ISGID: number;
  export const S_ISUID: number;

  export type Seek = unknown;
  export const enum Error {
    EACCES = 13,
    EBUSY = 16,
    EEXIST = 17,
    EINVAL = 22,
    EIO = 5,
    ENOENT = 2,
    ENOSPC = 28,
    ENOSYS = 38,
    EPERM = 1,
    EPIPE = 32,
  }

  export function exit(n: number): void;
  export function evalScript(script: string, options?: EvalOptions): void;
  export function loadScript(filename: string): void;
  export function loadFile(filename: string): void;
  export function open(
    filename: string,
    flags: unknown,
    errorObj?: ErrorOptions
  ): File | null;
  export function popen(
    command: string,
    flags: unknown,
    errorObj?: ErrorOptions
  ): File | null;
  export function fdopen(
    file: File,
    flags: unknown,
    errorObj?: ErrorOptions
  ): File | null;
  export function tmpFile(errorObj?: ErrorOptions): File | null;
  export function puts(str: string): void;
  export function printf(fmt: string, ...args: any[]): void;
  export function sprintf(fmt: string, ...args: any[]): void;

  export function strerror(errorno: Error): string;
  export function gc(): void;
  export function getenv(name: string): any | undefined;
  export function setenv(name: string, value: any): void;
  export function unsetenv(name: string): void;
  export function getenviron(): { readonly [key: string]: string };
  export function urlGet(url: string): string;
  export function urlGet(
    url: string,
    options: { full?: false; binary: false }
  ): string;
  export function urlGet(
    url: string,
    options: { full?: false; binary: true }
  ): ArrayBuffer;
  export function urlGet(
    url: string,
    options: { full: true; binary?: false }
  ): URLGetResponse;
  export function urlGet(
    url: string,
    options: { full: true; binary?: false }
  ): ArrayBuffer;
  export function parseExtJSON(str: string): any;

  const _in: File;
  export { _in as in };
  export const err: File;
  export const out: File;
}