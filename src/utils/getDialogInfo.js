import redWarning from '../assets/icons/red-warning.svg'
import blueWarning from '../assets/icons/blue-warning.svg'
import alarmIcon from '../assets/icons/alarm.svg'
import cameraIcon from '../assets/icons/photo-camera.svg'

export default function getDialogInfo(type) {
    const dialogInfo = {
        icon: '',
        colors: {
            'bg-icon': '',
            'bg-full': '',
            'bg-btn': ''
        }
    }

    if (type === 'red-warning') {
        dialogInfo.icon = redWarning
        dialogInfo.colors['bg-icon'] = 'bg-slate-50'
        dialogInfo.colors['bg-full'] = 'bg-red-100'
        dialogInfo.colors['bg-btn'] = 'bg-red-700'
    }
    if (type === 'blue-warning') {
        dialogInfo.icon = blueWarning
        dialogInfo.colors['bg-icon'] = 'bg-darkBlue-200'
        dialogInfo.colors['bg-full'] = 'bg-white'
        dialogInfo.colors['bg-btn'] = 'bg-darkBlue-600'
    }
    if (type === 'alarm') {
        dialogInfo.icon = alarmIcon
        dialogInfo.colors['bg-icon'] = 'bg-green-300'
        dialogInfo.colors['bg-full'] = 'bg-green-100'
        dialogInfo.colors['bg-btn'] = 'bg-green-800'
    }
    if (type === 'camera') {
        dialogInfo.icon = cameraIcon
        dialogInfo.colors['bg-icon'] = 'bg-orange-300'
        dialogInfo.colors['bg-full'] = 'bg-orange-50'
        dialogInfo.colors['bg-btn'] = 'bg-orange-800'
    }

    return dialogInfo
}
