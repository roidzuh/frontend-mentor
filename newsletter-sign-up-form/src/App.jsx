import { useState } from 'react';
import Card from './components/Card';
import Form from './components/Form';
import Heading from './components/Heading';
import Icon from './components/Icon';
import Paragraf from './components/Paragraf';
import Button from './components/Button';

export default function App() {
  const [success, setSuccess] = useState(false);

  if (success) {
    return (
      <main className="bg-custom-pale-navy h-svh flex justify-center items-center overflow-x-hidden">
        <Card className="pt-36 px-6 pb-10 max-w-[375px] bg-white flex flex-col lg:max-w-[540px] lg:rounded-[36px] lg:pt-12 lg:px-16">
          <Icon src="/icon-success.svg" alt="success" className="mb-10 w-16" />
          <Heading
            text="Thanks for subscribing!"
            className="text-custom-size-40 font-bold text-custom-dark-navy mb-6"
          />
          <Paragraf className="text-custom-size-16 text-custom-dark-navy mb-64 lg:mb-10">
            A confirmation email has been sent to{' '}
            <span className="font-bold">ash@loremcompany.com</span>. Please open
            it and click the button inside to confirm your subscription
          </Paragraf>
          <Button
            text="Dismiss message"
            className="pt-5 pb-4 bg-custom-dark-navy text-white font-bold text-custom-size-16 rounded-lg hover:bg-gradient-to-b from-custom-gradien-1 to-custom-gradien-2 hover:drop-shadow-[0_16px_32px_#ff605580]"
            onClick={() => setSuccess(false)}
          />
        </Card>
      </main>
    );
  }

  return (
    <main className="bg-custom-pale-navy h-svh flex justify-center items-center overflow-x-hidden">
      <Card className="bg-white w-full max-w-[375px] lg:max-w-fit lg:rounded-[36px]  lg:w-[928px] grid grid-cols-1  place-items-center lg:grid-cols-[1fr,424px]">
        <Icon
          src="/illustration-sign-up-mobile.svg"
          alt="illustration-sign-up"
          className="  lg:hidden"
        />
        <Icon
          src="/illustration-sign-up-desktop.svg"
          alt="illustration-sign-up"
          className="hidden lg:col-start-2 lg:row-start-1 lg:w-full h-full lg:block lg:py-6 pr-6"
        />
        <div className="mx-6 my-10 lg:my-0 lg:mx-16 flex flex-col gap-6 lg:col-start-1 lg:row-start-1">
          <Heading
            text="Stay updated!"
            className="text-custom-size-40 font-bold text-custom-dark-navy lg:text-custom-size-56"
          />
          <Paragraf className="text-custom-size-16 text-custom-dark-navy">
            Join 60,000+ product managers receiving monthly updates on:
          </Paragraf>
          <div className="flex flex-col gap-2 ">
            <div className="flex gap-4 items-start">
              <Icon
                src="/icon-list.svg"
                alt="Product discovery and building what matters"
              />
              <Paragraf className="text-custom-size-16 text-custom-dark-navy">
                Product discovery and building what matters
              </Paragraf>
            </div>
            <div className="flex gap-4 items-start">
              <Icon
                src="/icon-list.svg"
                alt="Measuring to ensure updates are a success"
              />
              <Paragraf className="text-custom-size-16 text-custom-dark-navy">
                Measuring to ensure updates are a success
              </Paragraf>
            </div>
            <div className="flex gap-4 items-start">
              <Icon src="/icon-list.svg" alt="And much more!" />
              <Paragraf className="text-custom-size-16 text-custom-dark-navy">
                And much more!
              </Paragraf>
            </div>
          </div>
          <Form onSuccess={setSuccess} />
        </div>
      </Card>
    </main>
  );
}
