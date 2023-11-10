import { useContext } from 'react';
import { Context } from '../../context/context';

const Warning = () => {
  const { warningMessage, setWarningMessage } = useContext(Context);

  const changeWarningStyle = () => {
    if (warningMessage.type === 'info') return 'bg-amber-300';
    else if (warningMessage.type === 'error') return 'bg-red-500';

    return 'bg-black-300';
  };
  const renderWarningMessage = () => {
    if (warningMessage?.warningMessage !== '') {
      setTimeout(() => {
        setWarningMessage({ warningMessage: '', type: '' });
      }, [5000]);
      return <section className={`${changeWarningStyle()} text-black w-fit px-6 py-2 rounded-lg sticky z-50 top-12 left-4`}>{warningMessage?.warningMessage}</section>;
    } else {
      return;
    }
  };
  return renderWarningMessage();
};

export default Warning;
