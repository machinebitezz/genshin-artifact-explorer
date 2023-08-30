import { createApp, defineComponent } from 'vue'

interface DialogActions {
  onOk: (unmount: () => void) => void
  onClose: (unmount: () => void) => void
}

export default function dialog(component: ReturnType<typeof defineComponent>, actions: DialogActions) {
  const dialog = createApp(component, {
    onOk() {
      actions.onOk(dialog.unmount)
    },

    onClose () {
      actions.onClose(dialog.unmount)
    }
  })

  dialog.mount('#dialogs')
}