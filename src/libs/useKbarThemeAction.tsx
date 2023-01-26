/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { useRegisterActions } from 'kbar';
import toast from 'react-hot-toast';

import ComputerIcon from '~/components/icons/ComputerIcon';
import MoonIcon from '~/components/icons/MoonIcon';
import SunIcon from '~/components/icons/SunIcon';
import useDarkMode from './useDarkMode';

export default function useKbarThemeAction() {
  const { setThemeDark, setThemeLight } = useDarkMode();

  useRegisterActions([
    {
      id: 'theme',
      name: 'Change theme…',
      shortcut: ['T'],
      keywords: 'interface color theme',
      section: 'Preferences',
      icon: <ComputerIcon width={18} />,
    },
    {
      id: 'darkTheme',
      name: 'Change Theme to Dark',
      keywords: 'dark theme',
      parent: 'theme',
      icon: <MoonIcon width={18} />,
      perform: (actionImpl) => {
        setThemeDark();

        toast((action) => (
          <Toast
            title="Dark theme enabled"
            buttonText="Undo"
            action={() => {
              actionImpl.command?.history?.undo();
              toast.dismiss(action.id);

              toast((undoAction) => (
                <Toast
                  title="Dark theme undone"
                  buttonText="Redo"
                  action={() => {
                    actionImpl.command?.history?.redo();
                    toast.dismiss(undoAction.id);
                  }}
                />
              ));
            }}
          />
        ));

        return () => {
          setThemeLight();
        };
      },
    },
    {
      id: 'lightTheme',
      name: 'Change Theme to Light',
      keywords: 'light theme',
      parent: 'theme',
      icon: <SunIcon width={18} />,
      perform: (actionImpl) => {
        setThemeLight();

        toast((action) => (
          <Toast
            title="Light theme enabled"
            buttonText="Undo"
            action={() => {
              actionImpl.command?.history?.undo();
              toast.dismiss(action.id);

              toast((undoAction) => (
                <Toast
                  title="Light theme undone"
                  buttonText="Redo"
                  action={() => {
                    actionImpl.command?.history?.redo();
                    toast.dismiss(undoAction.id);
                  }}
                />
              ));
            }}
          />
        ));

        return () => {
          setThemeDark();
        };
      },
    },
  ]);
}

function Toast({
  title,
  buttonText,
  action,
}: {
  title: string;
  buttonText: string;
  action: () => void;
}) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
      <span style={{ fontSize: 14 }}>{title}</span>
      <button
        onClick={action}
        style={{
          background: '#fff',
          border: 'none',
          boxShadow: '0 0 0 1px #000',
          padding: '4px 8px',
          cursor: 'pointer',
          borderRadius: 4,
          fontSize: 14,
        }}
      >
        {buttonText}
      </button>
    </div>
  );
}
