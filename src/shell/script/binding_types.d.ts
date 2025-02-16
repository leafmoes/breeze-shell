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
    
export class menu_item_parent_item_controller {
	
	
/**
  * 
  * @param 
  * @returns Array<menu_item_controller>
  */
  children: (() => Array<menu_item_controller>)
            
	
/**
  * 
  * @param new_index: number
  * @returns void
  */
  set_position: ((arg1: number) => void)
            
	
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
            
	
/**
  * 
  * @param data: js_menu_data, after_index: number
  * @returns menu_item_controller
  */
  append_child_after: ((arg1: js_menu_data, arg2: number) => menu_item_controller)
            
	
/**
  * 
  * @param data: js_menu_data
  * @returns menu_item_controller
  */
  append_child: ((arg1: js_menu_data) => menu_item_controller)
            
	
/**
  * 
  * @param data: js_menu_data
  * @returns menu_item_controller
  */
  prepend_child: ((arg1: js_menu_data) => menu_item_controller)
            
}
    
export class window_prop_data {
	key: string
	value: size_t | string
	
}
    
export class caller_window_data {
	props: Array<window_prop_data>
	x: number
	y: number
	width: number
	height: number
	maximized: boolean
	minimized: boolean
	focused: boolean
	visible: boolean
	executable_path: string
	title: string
	
}
    
export class js_menu_context {
	folder_view?: folder_view_controller | undefined
	window_titlebar?: window_titlebar_controller | undefined
	input_box?: input_box_controller | undefined
	window_info: caller_window_data
	
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
  append_item_after: ((arg1: js_menu_data, arg2: number) => menu_item_controller)
            
	
/**
  * 
  * @param after_index: number
  * @returns menu_item_parent_item_controller
  */
  append_parent_item_after: ((arg1: number) => menu_item_parent_item_controller)
            
	
/**
  * 
  * @param 
  * @returns menu_item_parent_item_controller
  */
  append_parent_item: (() => menu_item_parent_item_controller)
            
	
/**
  * 
  * @param 
  * @returns menu_item_parent_item_controller
  */
  prepend_parent_item: (() => menu_item_parent_item_controller)
            
	
/**
  * 
  * @param data: js_menu_data
  * @returns menu_item_controller
  */
  append_item: ((arg1: js_menu_data) => menu_item_controller)
            
	
/**
  * 
  * @param data: js_menu_data
  * @returns menu_item_controller
  */
  prepend_item: ((arg1: js_menu_data) => menu_item_controller)
            
	
/**
  * 在开头添加 Spacer
  *  Prepend Spacer
  * @param 
  * @returns void
  */
  prepend_spacer: (() => void)
            
	
/**
  * 在末尾添加 Spacer
  *  Append Spacer
  * @param 
  * @returns void
  */
  append_spacer: (() => void)
            
	
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
            
	
/**
  * 
  * @param data: js_menu_data
  * @returns menu_item_controller
  */
  prepend_menu: ((arg1: js_menu_data) => menu_item_controller)
            
	
/**
  * 
  * @param data: js_menu_data
  * @returns menu_item_controller
  */
  append_menu: ((arg1: js_menu_data) => menu_item_controller)
            
	
/**
  * 
  * @param data: js_menu_data, after_index: number
  * @returns menu_item_controller
  */
  append_menu_after: ((arg1: js_menu_data, arg2: number) => menu_item_controller)
            
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
            
	
/**
  * 同步打开东西
  *  Open something synchronously
  * @param path: string, args: string
  * @returns void
  */
  static open: ((arg1: string, arg2: string) => void)
            
	
/**
  * 异步打开东西
  *  Open something asynchronously
  * @param path: string, args: string, callback: (() => void)
  * @returns void
  */
  static open_async: ((arg1: string, arg2: string, arg3: (() => void)) => void)
            
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
  static hash: (() => string)
            
	
/**
  * 
  * @param 
  * @returns string
  */
  static branch: (() => string)
            
	
/**
  * 
  * @param 
  * @returns string
  */
  static build_date: (() => string)
            
	
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
            
	
/**
  * 
  * @param 
  * @returns string
  */
  static user_language: (() => string)
            
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
            
	
/**
  * 
  * @param name: string
  * @returns string | undefined
  */
  static env: ((arg1: string) => string | undefined)
            
}
    
export class infra {
	
	
/**
  * 
  * @param callback: (() => void), delay: number
  * @returns number
  */
  static setTimeout: ((arg1: (() => void), arg2: number) => number)
            
	
/**
  * 
  * @param id: number
  * @returns void
  */
  static clearTimeout: ((arg1: number) => void)
            
	
/**
  * 
  * @param callback: (() => void), delay: number
  * @returns number
  */
  static setInterval: ((arg1: (() => void), arg2: number) => number)
            
	
/**
  * 
  * @param id: number
  * @returns void
  */
  static clearInterval: ((arg1: number) => void)
            
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
