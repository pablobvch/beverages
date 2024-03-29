const WelcomeBack = () => {
  return (
    <span className="font-dm-sans text-2xl font-bold leading-8 tracking-normal text-left text-custom-dark-gray">Welcome Back!</span>
  )
}

const Greetings = () => {
  return (
    <span className="font-dm-sans text-base font-normal leading-normal tracking-normal text-left text-custom-gray">
      Hi Mr. Mac allister,
    </span>
  );
};

export const WelcomeMessage = () => {
  return (
    <>
      <div className="mt-6">
        <Greetings />
      </div>
      <div className="mt-1">
        <WelcomeBack />
      </div>
    </>
  );
};