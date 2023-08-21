export default function TopBanner() {
  const navToNewBlog = () => {
    window.open('https://bepyan.me/', '_blank');
  };

  return (
    <>
      <div
        className="text-primary bg-secondary sticky inset-x-0 top-0 z-50 h-10 w-full cursor-pointer"
        onClick={navToNewBlog}
      >
        <div className="mx-auto flex h-full max-w-3xl items-center px-6 font-semibold lg:max-w-6xl lg:px-8">
          🚀&nbsp;&nbsp;&nbsp;새로운 블로그로 이전했습니다.
        </div>
      </div>
    </>
  );
}
