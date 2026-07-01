import FeatherIcon from 'feather-icons-react';

const ALERTS = [
  {
    tipo: 'success',
    icon: 'check-circle',
    bg: 'bg-green-50   dark:bg-green-950/40',
    border: 'border-green-400',
    text: 'text-green-800 dark:text-green-300',
    iconCls: 'text-green-600 dark:text-green-400',
    label: 'Éxito',
    msg: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    tipo: 'info',
    icon: 'info',
    bg: 'bg-blue-50    dark:bg-blue-950/40',
    border: 'border-primary',
    text: 'text-blue-800  dark:text-blue-300',
    iconCls: 'text-primary',
    label: 'Información',
    msg: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    tipo: 'neutral',
    icon: 'info',
    bg: 'bg-grey/10    dark:bg-grey/20',
    border: 'border-grey',
    text: 'text-black     dark:text-white',
    iconCls: 'text-grey',
    label: 'Neutral',
    msg: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
  },
  {
    tipo: 'warning',
    icon: 'alert-circle',
    bg: 'bg-yellow/10  dark:bg-yellow/10',
    border: 'border-yellow',
    text: 'text-yellow-900 dark:text-yellow-200',
    iconCls: 'text-yellow-600 dark:text-yellow-400',
    label: 'Advertencia',
    msg: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    tipo: 'danger',
    icon: 'x-circle',
    bg: 'bg-red-50     dark:bg-red-950/40',
    border: 'border-red-500',
    text: 'text-red-800   dark:text-red-300',
    iconCls: 'text-red-600   dark:text-red-400',
    label: 'Error',
    msg: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem.'
  }
];

export default function AlertsPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h2>Mensajes y Notificaciones</h2>
      <div className="mt-6 space-y-6">
        {ALERTS.map(({ tipo, icon, bg, border, text, iconCls, label, msg }) => (
          <div key={tipo}>
            <h3 className="mb-1">{label}</h3>
            <div
              className={`flex items-start gap-4 px-5 py-4 rounded-lg border-l-4 mb-4 ${bg} ${border}`}
            >
              <FeatherIcon
                icon={icon}
                size={24}
                className={`shrink-0 mt-0.5 ${iconCls}`}
              />
              <h5 className={`m-0 font-normal ${text}`}>{msg}</h5>
            </div>
            <pre className="text-sm rounded-lg p-4 overflow-x-auto bg-white dark:bg-black/40 text-grey">
              <code>{`<div className="flex items-start gap-4 px-5 py-4 rounded-lg border-l-4 ${bg} ${border}">
  <FeatherIcon icon="${icon}" size={24} className="shrink-0 mt-0.5 ${iconCls}" />
  <h5 className="m-0 font-normal ${text}">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  </h5>
</div>`}</code>
            </pre>
          </div>
        ))}
      </div>
    </div>
  );
}
