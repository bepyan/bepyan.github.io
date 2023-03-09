import { useState } from 'react';
import { toast } from 'react-hot-toast';

import useWatchTimeout from '~/libs/useWatchTimeout';

import CheckIcon from '../icons/CheckIcon';
import LinkIcon from '../icons/LinkIcon';
import IconButton from './IconButton';

export default function CopyLinkButton(props: React.ComponentProps<'button'>) {
  const [copied, setCopied] = useState(false);

  useWatchTimeout(copied, 1500, () => {
    setCopied(false);
  });

  const handleCopy = async () => {
    const url = window.document.location.href;

    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      toast('링크를 복사했습니다.', { icon: '🔗' });
    } catch (e) {
      console.error(e);
      toast.error('링크 복사에 실패했습니다.');
    }
  };

  return (
    <IconButton {...props} aria-label="copy-link" onClick={handleCopy}>
      {copied ? <CheckIcon width={20} /> : <LinkIcon width={20} />}
    </IconButton>
  );
}
