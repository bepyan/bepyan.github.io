export const copyClipboard = async (url = window.document.location.href) => {
  try {
    await navigator.clipboard.writeText(url);
  } catch (e) {
    console.error(e);
    alert('클립보드 복사에 실패했습니다.');
  }
};
