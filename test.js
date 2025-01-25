import * as shell from "mshell"
import * as std from "qjs:std"
import * as os from "qjs:os"
const setTimeout = os.setTimeout.bind(os)
const console = {
    log: shell.println,
    error: shell.println,
}

shell.menu_controller.add_menu_listener((e) => {
    const menus = e.menu.get_menu_items()
    const index = menus.length
    if (e.context.input_box) {
        let count = 0;
        const handle = e.menu.add_menu_item_after({
            type: 'button',
            name: '随机字符串',
            action: () => {
                e.context.input_box.set_text(Math.random().toString(36).substr(2))
                e.menu.close()
            }
        }, index - 4)
    }
})