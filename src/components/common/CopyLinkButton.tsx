import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';

import CheckIcon from '../icons/CheckIcon';
import LinkIcon from '../icons/LinkIcon';
import IconButton from './IconButton';

export default function CopyLinkButton() {
  const [copied, setCopied] = useState(false);

  const onClickCopy = async () => {
    const url = window.document.location.href;

    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      toast.success('link copy successful');
    } catch (e) {
      console.error(e);
      toast.error('link copy failed');
    }
  };

  useEffect(() => {
    let timeOut: NodeJS.Timeout;

    if (copied) {
      timeOut = setTimeout(() => {
        setCopied(false);
      }, 1500);
    }

    return () => {
      timeOut && clearInterval(timeOut);
    };
  }, [copied]);

  return (
    <IconButton className="mr-auto" onClick={() => void onClickCopy()}>
      {copied ? <CheckIcon width={20} /> : <LinkIcon width={20} />}
    </IconButton>
  );
}
