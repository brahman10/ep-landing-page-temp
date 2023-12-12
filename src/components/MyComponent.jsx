import * as React from "react";

function MyComponent() {
  return (
    <div className="items-stretch bg-white flex flex-col">
      <div className="items-center bg-white flex w-full flex-col justify-center px-16 py-9 max-md:max-w-full max-md:px-5">
        <div className="flex ml-0 items-center justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
          <div className="items-stretch flex gap-3 my-auto">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/367a985da78628a27eaa46fb883f9f45a25f261d1c09d7fb913b5778ff6797ef?"
              className="aspect-square object-contain object-center w-11 overflow-hidden shrink-0 max-w-full"
            />
            <div className="text-pink-500 text-xl font-bold leading-8 self-center grow whitespace-nowrap my-auto">
              eazyPregnancy
            </div>
          </div>
          <div className="justify-between items-center self-stretch flex gap-5 pl-20 max-md:max-w-full max-md:flex-wrap max-md:pl-5">
            <div className="items-stretch border border-[color:var(--gray-text-100,#DCD8DC)] bg-white flex gap-1 my-auto px-6 py-2 rounded-lg border-solid max-md:px-5">
              <div className="text-zinc-300 text-sm leading-6 grow whitespace-nowrap">
                Search blogs, events, programs etc
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d42a3587460b8d36694c4e87304478708fc9bcf5d557a5a516b45caef527ebd5?"
                className="aspect-square object-contain object-center w-4 overflow-hidden self-center shrink-0 max-w-full my-auto"
              />
            </div>
            <div className="justify-between items-start self-stretch flex gap-5 pr-2 py-1 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
              <div className="items-stretch self-center flex gap-1 my-auto p-1 rounded-lg">
                <div className="text-zinc-800 text-sm font-semibold leading-6 grow whitespace-nowrap">
                  Research
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/0d74d2bc7301d08dc9e08eb93e3cee0fd0e0ecea2481cb6ebe9d1331f3b45ea3?"
                  className="aspect-square object-contain object-center w-4 overflow-hidden self-center shrink-0 max-w-full my-auto"
                />
              </div>
              <div className="items-stretch self-center flex gap-1 my-auto p-1 rounded-lg">
                <div className="text-zinc-800 text-sm font-semibold leading-6 grow whitespace-nowrap">
                  Community
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/0d74d2bc7301d08dc9e08eb93e3cee0fd0e0ecea2481cb6ebe9d1331f3b45ea3?"
                  className="aspect-square object-contain object-center w-4 overflow-hidden self-center shrink-0 max-w-full my-auto"
                />
              </div>
              <div className="text-zinc-800 text-sm font-semibold leading-6 self-center my-auto">
                About Us
              </div>
              <div className="text-white text-sm font-semibold leading-6 whitespace-nowrap items-stretch bg-pink-500 self-stretch grow justify-center px-6 py-2 rounded-lg max-md:px-5">
                Login
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/666a3d66f7b3f84794561537b09c2095d6ce0fa5758e2b0a61e45acbe115181a?"
                className="aspect-square object-contain object-center w-6 overflow-hidden self-center shrink-0 max-w-full my-auto"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="justify-center items-center flex w-full flex-col px-16 py-12 max-md:max-w-full max-md:px-5">
        <div className="flex w-full max-w-[1200px] flex-col items-stretch mt-16 mb-12 max-md:max-w-full max-md:my-10">
          <div className="text-zinc-800 text-5xl font-bold leading-[72px] max-md:max-w-full max-md:text-4xl max-md:leading-[67px]">
            Our Blogs
          </div>
          <div className="text-zinc-600 text-xl leading-8 mt-6 max-md:max-w-full">
            A little description about this blog, not more than 250 words. Nunc
            non mi vulputate, vehicula nisi vel, gravida dolor. Mauris eu
            rhoncus neque. Nullam tempor tempor magna a ultricies. Sed leo eros,
            volutpat gravida ante at, vestibulum porttitor ante. In consectetur,
            purus a ultricies tempus, nisi dui commodo turpi.
          </div>
          <div className="justify-center border border-[color:var(--gray-text-100,#DCD8DC)] mt-32 p-8 rounded-xl border-solid max-md:max-w-full max-md:mt-10 max-md:px-5">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
                <img
                  loading="lazy"
                  srcSet="..."
                  className="aspect-[0.89] object-contain object-center w-full max-w-screen-md overflow-hidden max-md:max-w-full max-md:mt-10"
                />
              </div>
              <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
                <div className="max-w-screen-md justify-center items-start flex flex-col my-auto max-md:max-w-full max-md:mt-10">
                  <div className="text-white text-sm font-bold leading-6 whitespace-nowrap items-stretch bg-pink-500 justify-center px-4 py-1 rounded-[40px] self-start">
                    FEATURED
                  </div>
                  <div className="self-stretch text-zinc-800 text-4xl font-bold leading-[54px] mt-6 max-md:max-w-full">
                    Why Yoga is necessary in pregnancy?
                  </div>
                  <div className="self-stretch text-zinc-600 text-xl leading-8 mt-6 max-md:max-w-full">
                    A little description about this blog, not more than 250
                    words. Nunc non mi vulputate, vehicula nisi vel, gravida
                    dolor. Mauris eu rhoncus neque. Nullam tempor tempor magna a
                    ultricies. Sed leo eros, volutpat gravida ante at.
                  </div>
                  <div className="self-stretch bg-zinc-300 flex shrink-0 h-0.5 flex-col mt-6 max-md:max-w-full" />
                  <div className="items-stretch self-stretch flex justify-between gap-3 mt-6 max-md:max-w-full max-md:flex-wrap">
                    <div className="text-zinc-600 text-xl leading-8 grow shrink basis-auto">
                      by Dr. Mamta Kulkarni
                    </div>
                    <div className="items-stretch flex justify-between gap-5">
                      <div className="text-zinc-400 text-xl leading-8 grow whitespace-nowrap">
                        5 min read
                      </div>
                      <div className="items-center flex justify-between gap-1.5">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/37c8c1c335bce14ffcdabe4fc7330e56363667e7e42ef1cc7d2b74c1edcdc76e?"
                          className="aspect-square object-contain object-center w-[19px] overflow-hidden shrink-0 max-w-full my-auto"
                        />
                        <div className="text-teal-900 text-xl font-bold leading-8 self-stretch grow whitespace-nowrap">
                          4.8
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-32 max-md:max-w-full max-md:mt-10">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
                <div className="items-stretch flex grow flex-col max-md:mt-10">
                  <div className="flex-col overflow-hidden relative flex aspect-[1.5726872246696035] w-full pl-16 pr-2.5 pt-2.5 pb-12 items-end max-md:pl-5">
                    <img
                      loading="lazy"
                      srcSet="..."
                      className="absolute h-full w-full object-cover object-center inset-0"
                    />
                    <div className="relative items-center bg-zinc-800 flex w-[59px] max-w-full gap-1 mb-24 px-2 py-0.5 rounded-3xl max-md:mb-10">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/9246fc4382cf18176d456a3576f23127dd041ba5313e1a96c69cab9fcc82f5c6?"
                        className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1 my-auto"
                      />
                      <div className="text-white text-sm font-bold leading-6 self-stretch grow whitespace-nowrap">
                        4.8
                      </div>
                    </div>
                  </div>
                  <div className="text-zinc-800 text-xl font-bold leading-8 mt-6">
                    Why Yoga is necessary in pregnancy?
                  </div>
                  <div className="text-zinc-600 text-base leading-6 mt-2">
                    Lorem iopsum dolor sit amet consectuter adipiscing elit.
                  </div>
                  <div className="bg-zinc-100 flex shrink-0 h-px flex-col mt-2" />
                  <div className="items-stretch flex justify-between gap-3 mt-2">
                    <div className="text-zinc-600 text-sm leading-6 grow shrink basis-auto">
                      by Dr. Mamta Kulkarni
                    </div>
                    <div className="text-zinc-400 text-sm leading-6 whitespace-nowrap">
                      5 min read
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                <div className="items-stretch flex grow flex-col max-md:mt-10">
                  <div className="flex-col overflow-hidden relative flex aspect-[1.577092511013216] w-full pl-16 pr-3 pt-2.5 pb-12 items-end max-md:pl-5">
                    <img
                      loading="lazy"
                      srcSet="..."
                      className="absolute h-full w-full object-cover object-center inset-0"
                    />
                    <div className="relative items-center bg-zinc-800 flex w-[59px] max-w-full gap-1 mb-24 px-2 py-0.5 rounded-3xl max-md:mb-10">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/67c07e251d9eb0bf75b103ce729f2310c185786adfe324cb12f9b5c7b0615d86?"
                        className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1 my-auto"
                      />
                      <div className="text-white text-sm font-bold leading-6 self-stretch grow whitespace-nowrap">
                        4.8
                      </div>
                    </div>
                  </div>
                  <div className="text-zinc-800 text-xl font-bold leading-8 mt-6">
                    Blog title goes here
                  </div>
                  <div className="text-zinc-600 text-base leading-6 mt-2">
                    Lorem iopsum dolor sit amet consectuter adipiscing elit.
                  </div>
                  <div className="bg-zinc-100 flex shrink-0 h-px flex-col mt-2" />
                  <div className="items-stretch flex justify-between gap-3 mt-2">
                    <div className="text-zinc-600 text-sm leading-6 grow shrink basis-auto">
                      by Dr. Mamta Kulkarni
                    </div>
                    <div className="text-zinc-400 text-sm leading-6 whitespace-nowrap">
                      5 min read
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                <div className="items-stretch flex grow flex-col max-md:mt-10">
                  <div className="flex-col overflow-hidden relative flex aspect-[1.5726872246696035] w-full pl-16 pr-2.5 pt-2.5 pb-12 items-end max-md:pl-5">
                    <img
                      loading="lazy"
                      srcSet="..."
                      className="absolute h-full w-full object-cover object-center inset-0"
                    />
                    <div className="relative items-center bg-zinc-800 flex w-[59px] max-w-full gap-1 mb-24 px-2 py-0.5 rounded-3xl max-md:mb-10">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/67c07e251d9eb0bf75b103ce729f2310c185786adfe324cb12f9b5c7b0615d86?"
                        className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1 my-auto"
                      />
                      <div className="text-white text-sm font-bold leading-6 self-stretch grow whitespace-nowrap">
                        4.8
                      </div>
                    </div>
                  </div>
                  <div className="text-zinc-800 text-xl font-bold leading-8 mt-6">
                    Blog title goes here
                  </div>
                  <div className="text-zinc-600 text-base leading-6 mt-2">
                    Lorem iopsum dolor sit amet consectuter adipiscing elit.
                  </div>
                  <div className="bg-zinc-100 flex shrink-0 h-px flex-col mt-2" />
                  <div className="items-stretch flex justify-between gap-3 mt-2">
                    <div className="text-zinc-600 text-sm leading-6 grow shrink basis-auto">
                      by Dr. Mamta Kulkarni
                    </div>
                    <div className="text-zinc-400 text-sm leading-6 whitespace-nowrap">
                      5 min read
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-32 max-md:max-w-full max-md:mt-10">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
                <div className="items-stretch flex grow flex-col max-md:mt-10">
                  <div className="flex-col overflow-hidden relative flex aspect-[1.5726872246696035] w-full pl-16 pr-2.5 pt-2.5 pb-12 items-end max-md:pl-5">
                    <img
                      loading="lazy"
                      srcSet="..."
                      className="absolute h-full w-full object-cover object-center inset-0"
                    />
                    <div className="relative items-center bg-zinc-800 flex w-[59px] max-w-full gap-1 mb-24 px-2 py-0.5 rounded-3xl max-md:mb-10">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/85cb7edc70dc93b5efc0c8c1540bcbb2b1f427508414c8097599c9e8c4896c8a?"
                        className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1 my-auto"
                      />
                      <div className="text-white text-sm font-bold leading-6 self-stretch grow whitespace-nowrap">
                        4.8
                      </div>
                    </div>
                  </div>
                  <div className="text-zinc-800 text-xl font-bold leading-8 mt-6">
                    Blog title goes here
                  </div>
                  <div className="text-zinc-600 text-base leading-6 mt-2">
                    Lorem iopsum dolor sit amet consectuter adipiscing elit.
                  </div>
                  <div className="bg-zinc-100 flex shrink-0 h-px flex-col mt-2" />
                  <div className="items-stretch flex justify-between gap-3 mt-2">
                    <div className="text-zinc-600 text-sm leading-6 grow shrink basis-auto">
                      by Dr. Mamta Kulkarni
                    </div>
                    <div className="text-zinc-400 text-sm leading-6 whitespace-nowrap">
                      5 min read
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                <div className="items-stretch flex grow flex-col max-md:mt-10">
                  <div className="flex-col overflow-hidden relative flex aspect-[1.577092511013216] w-full pl-16 pr-3 pt-2.5 pb-12 items-end max-md:pl-5">
                    <img
                      loading="lazy"
                      srcSet="..."
                      className="absolute h-full w-full object-cover object-center inset-0"
                    />
                    <div className="relative items-center bg-zinc-800 flex w-[59px] max-w-full gap-1 mb-24 px-2 py-0.5 rounded-3xl max-md:mb-10">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/d3d8c469408db2454ca3f04cbc954b2a30e816df3ea3e16780ed78ad7949664e?"
                        className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1 my-auto"
                      />
                      <div className="text-white text-sm font-bold leading-6 self-stretch grow whitespace-nowrap">
                        4.8
                      </div>
                    </div>
                  </div>
                  <div className="text-zinc-800 text-xl font-bold leading-8 mt-6">
                    Blog title goes here
                  </div>
                  <div className="text-zinc-600 text-base leading-6 mt-2">
                    Lorem iopsum dolor sit amet consectuter adipiscing elit.
                  </div>
                  <div className="bg-zinc-100 flex shrink-0 h-px flex-col mt-2" />
                  <div className="items-stretch flex justify-between gap-3 mt-2">
                    <div className="text-zinc-600 text-sm leading-6 grow shrink basis-auto">
                      by Dr. Mamta Kulkarni
                    </div>
                    <div className="text-zinc-400 text-sm leading-6 whitespace-nowrap">
                      5 min read
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                <div className="items-stretch flex grow flex-col max-md:mt-10">
                  <div className="flex-col overflow-hidden relative flex aspect-[1.5726872246696035] w-full pl-16 pr-2.5 pt-2.5 pb-12 items-end max-md:pl-5">
                    <img
                      loading="lazy"
                      srcSet="..."
                      className="absolute h-full w-full object-cover object-center inset-0"
                    />
                    <div className="relative items-center bg-zinc-800 flex w-[59px] max-w-full gap-1 mb-24 px-2 py-0.5 rounded-3xl max-md:mb-10">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/8ddeb72bcf03c53a0f16c420a9ece351a724549b97a91651d65640918d36c3ac?"
                        className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1 my-auto"
                      />
                      <div className="text-white text-sm font-bold leading-6 self-stretch grow whitespace-nowrap">
                        4.8
                      </div>
                    </div>
                  </div>
                  <div className="text-zinc-800 text-xl font-bold leading-8 mt-6">
                    Blog title goes here
                  </div>
                  <div className="text-zinc-600 text-base leading-6 mt-2">
                    Lorem iopsum dolor sit amet consectuter adipiscing elit.
                  </div>
                  <div className="bg-zinc-100 flex shrink-0 h-px flex-col mt-2" />
                  <div className="items-stretch flex justify-between gap-3 mt-2">
                    <div className="text-zinc-600 text-sm leading-6 grow shrink basis-auto">
                      by Dr. Mamta Kulkarni
                    </div>
                    <div className="text-zinc-400 text-sm leading-6 whitespace-nowrap">
                      5 min read
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-32 max-md:max-w-full max-md:mt-10">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
                <div className="items-stretch flex grow flex-col max-md:mt-10">
                  <div className="flex-col overflow-hidden relative flex aspect-[1.5726872246696035] w-full pl-16 pr-2.5 pt-2.5 pb-12 items-end max-md:pl-5">
                    <img
                      loading="lazy"
                      srcSet="..."
                      className="absolute h-full w-full object-cover object-center inset-0"
                    />
                    <div className="relative items-center bg-zinc-800 flex w-[59px] max-w-full gap-1 mb-24 px-2 py-0.5 rounded-3xl max-md:mb-10">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/405803415f8aa15ca3442ca0fbc7cec8c8ce58119ab0a9c58bfaf00025fd2324?"
                        className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1 my-auto"
                      />
                      <div className="text-white text-sm font-bold leading-6 self-stretch grow whitespace-nowrap">
                        4.8
                      </div>
                    </div>
                  </div>
                  <div className="text-zinc-800 text-xl font-bold leading-8 mt-6">
                    Blog title goes here
                  </div>
                  <div className="text-zinc-600 text-base leading-6 mt-2">
                    Lorem iopsum dolor sit amet consectuter adipiscing elit.
                  </div>
                  <div className="bg-zinc-100 flex shrink-0 h-px flex-col mt-2" />
                  <div className="items-stretch flex justify-between gap-3 mt-2">
                    <div className="text-zinc-600 text-sm leading-6 grow shrink basis-auto">
                      by Dr. Mamta Kulkarni
                    </div>
                    <div className="text-zinc-400 text-sm leading-6 whitespace-nowrap">
                      5 min read
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                <div className="items-stretch flex grow flex-col max-md:mt-10">
                  <div className="flex-col overflow-hidden relative flex aspect-[1.577092511013216] w-full pl-16 pr-3 pt-2.5 pb-12 items-end max-md:pl-5">
                    <img
                      loading="lazy"
                      srcSet="..."
                      className="absolute h-full w-full object-cover object-center inset-0"
                    />
                    <div className="relative items-center bg-zinc-800 flex w-[59px] max-w-full gap-1 mb-24 px-2 py-0.5 rounded-3xl max-md:mb-10">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/d363a841fefe3cb30f1dc158574384971359e744f82f3bef272bbce455a127fd?"
                        className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1 my-auto"
                      />
                      <div className="text-white text-sm font-bold leading-6 self-stretch grow whitespace-nowrap">
                        4.8
                      </div>
                    </div>
                  </div>
                  <div className="text-zinc-800 text-xl font-bold leading-8 mt-6">
                    Blog title goes here
                  </div>
                  <div className="text-zinc-600 text-base leading-6 mt-2">
                    Lorem iopsum dolor sit amet consectuter adipiscing elit.
                  </div>
                  <div className="bg-zinc-100 flex shrink-0 h-px flex-col mt-2" />
                  <div className="items-stretch flex justify-between gap-3 mt-2">
                    <div className="text-zinc-600 text-sm leading-6 grow shrink basis-auto">
                      by Dr. Mamta Kulkarni
                    </div>
                    <div className="text-zinc-400 text-sm leading-6 whitespace-nowrap">
                      5 min read
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                <div className="items-stretch flex grow flex-col max-md:mt-10">
                  <div className="flex-col overflow-hidden relative flex aspect-[1.5726872246696035] w-full pl-16 pr-2.5 pt-2.5 pb-12 items-end max-md:pl-5">
                    <img
                      loading="lazy"
                      srcSet="..."
                      className="absolute h-full w-full object-cover object-center inset-0"
                    />
                    <div className="relative items-center bg-zinc-800 flex w-[59px] max-w-full gap-1 mb-24 px-2 py-0.5 rounded-3xl max-md:mb-10">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/d8eff9a2fde282cfc026cf7ea9bd6bad3ca53a8bd9d8487b01eab02c6192b9e8?"
                        className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1 my-auto"
                      />
                      <div className="text-white text-sm font-bold leading-6 self-stretch grow whitespace-nowrap">
                        4.8
                      </div>
                    </div>
                  </div>
                  <div className="text-zinc-800 text-xl font-bold leading-8 mt-6">
                    Blog title goes here
                  </div>
                  <div className="text-zinc-600 text-base leading-6 mt-2">
                    Lorem iopsum dolor sit amet consectuter adipiscing elit.
                  </div>
                  <div className="bg-zinc-100 flex shrink-0 h-px flex-col mt-2" />
                  <div className="items-stretch flex justify-between gap-3 mt-2">
                    <div className="text-zinc-600 text-sm leading-6 grow shrink basis-auto">
                      by Dr. Mamta Kulkarni
                    </div>
                    <div className="text-zinc-400 text-sm leading-6 whitespace-nowrap">
                      5 min read
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-32 max-md:max-w-full max-md:mt-10">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
                <div className="items-stretch flex grow flex-col max-md:mt-10">
                  <div className="flex-col overflow-hidden relative flex aspect-[1.579646017699115] w-full pl-16 pr-2.5 pt-2.5 pb-12 items-end max-md:pl-5">
                    <img
                      loading="lazy"
                      srcSet="..."
                      className="absolute h-full w-full object-cover object-center inset-0"
                    />
                    <div className="relative items-center bg-zinc-800 flex w-[59px] max-w-full gap-1 mb-24 px-2 py-0.5 rounded-3xl max-md:mb-10">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/6c49d92d9c2692ac635b86b0a75ddc1deeda4ba26d70b58f2cb9f2c75f7e7aec?"
                        className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1 my-auto"
                      />
                      <div className="text-white text-sm font-bold leading-6 self-stretch grow whitespace-nowrap">
                        4.8
                      </div>
                    </div>
                  </div>
                  <div className="text-zinc-800 text-xl font-bold leading-8 mt-6">
                    Blog title goes here
                  </div>
                  <div className="text-zinc-600 text-base leading-6 mt-2">
                    Lorem iopsum dolor sit amet consectuter adipiscing elit.
                  </div>
                  <div className="bg-zinc-100 flex shrink-0 h-px flex-col mt-2" />
                  <div className="items-stretch flex justify-between gap-3 mt-2">
                    <div className="text-zinc-600 text-sm leading-6 grow shrink basis-auto">
                      by Dr. Mamta Kulkarni
                    </div>
                    <div className="text-zinc-400 text-sm leading-6 whitespace-nowrap">
                      5 min read
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                <div className="items-stretch flex grow flex-col max-md:mt-10">
                  <div className="flex-col overflow-hidden relative flex aspect-[1.584070796460177] w-full pl-16 pr-3 pt-2.5 pb-12 items-end max-md:pl-5">
                    <img
                      loading="lazy"
                      srcSet="..."
                      className="absolute h-full w-full object-cover object-center inset-0"
                    />
                    <div className="relative items-center bg-zinc-800 flex w-[59px] max-w-full gap-1 mb-24 px-2 py-0.5 rounded-3xl max-md:mb-10">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e041814c9b89b918d47588ba44a9cb7334f7d766cc4bf2b6ad1489593a62eb63?"
                        className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1 my-auto"
                      />
                      <div className="text-white text-sm font-bold leading-6 self-stretch grow whitespace-nowrap">
                        4.8
                      </div>
                    </div>
                  </div>
                  <div className="text-zinc-800 text-xl font-bold leading-8 mt-6">
                    Blog title goes here
                  </div>
                  <div className="text-zinc-600 text-base leading-6 mt-2">
                    Lorem iopsum dolor sit amet consectuter adipiscing elit.
                  </div>
                  <div className="bg-zinc-100 flex shrink-0 h-px flex-col mt-2" />
                  <div className="items-stretch flex justify-between gap-3 mt-2">
                    <div className="text-zinc-600 text-sm leading-6 grow shrink basis-auto">
                      by Dr. Mamta Kulkarni
                    </div>
                    <div className="text-zinc-400 text-sm leading-6 whitespace-nowrap">
                      5 min read
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                <div className="items-stretch flex grow flex-col max-md:mt-10">
                  <div className="flex-col overflow-hidden relative flex aspect-[1.579646017699115] w-full pl-16 pr-2.5 pt-2.5 pb-12 items-end max-md:pl-5">
                    <img
                      loading="lazy"
                      srcSet="..."
                      className="absolute h-full w-full object-cover object-center inset-0"
                    />
                    <div className="relative items-center bg-zinc-800 flex w-[59px] max-w-full gap-1 mb-24 px-2 py-0.5 rounded-3xl max-md:mb-10">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/a8d72b466f2ce085fa3195047b0aaa264253bd9d05b46f934c5d4d92f2d00044?"
                        className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1 my-auto"
                      />
                      <div className="text-white text-sm font-bold leading-6 self-stretch grow whitespace-nowrap">
                        4.8
                      </div>
                    </div>
                  </div>
                  <div className="text-zinc-800 text-xl font-bold leading-8 mt-6">
                    Blog title goes here
                  </div>
                  <div className="text-zinc-600 text-base leading-6 mt-2">
                    Lorem iopsum dolor sit amet consectuter adipiscing elit.
                  </div>
                  <div className="bg-zinc-100 flex shrink-0 h-px flex-col mt-2" />
                  <div className="items-stretch flex justify-between gap-3 mt-2">
                    <div className="text-zinc-600 text-sm leading-6 grow shrink basis-auto">
                      by Dr. Mamta Kulkarni
                    </div>
                    <div className="text-zinc-400 text-sm leading-6 whitespace-nowrap">
                      5 min read
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="items-center bg-white flex w-full flex-col justify-center px-16 py-11 max-md:max-w-full max-md:px-5">
        <div className="flex w-full max-w-[1200px] flex-col mt-12 max-md:max-w-full max-md:mt-10">
          <div className="justify-between items-stretch self-stretch flex w-full gap-5 max-md:max-w-full max-md:flex-wrap">
            <div className="items-stretch flex justify-between gap-3">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/acfe966f92b99fcfce7df2f9e7041f7edb40ab03f015fd1d3c4775c38f17fe3c?"
                className="aspect-square object-contain object-center w-16 overflow-hidden shrink-0 max-w-full"
              />
              <div className="text-neutral-900 text-2xl font-bold leading-9 self-center grow whitespace-nowrap my-auto">
                eazyPregnancy
              </div>
            </div>
            <div className="items-stretch self-center flex justify-between gap-5 my-auto px-6 max-md:justify-center max-md:px-5">
              <img
                loading="lazy"
                srcSet="..."
                className="aspect-square object-contain object-center w-8 overflow-hidden shrink-0 max-w-full"
              />
              <img
                loading="lazy"
                srcSet="..."
                className="aspect-square object-contain object-center w-8 overflow-hidden shrink-0 max-w-full"
              />
              <img
                loading="lazy"
                srcSet="..."
                className="aspect-square object-contain object-center w-8 overflow-hidden shrink-0 max-w-full"
              />
            </div>
          </div>
          <div className="self-stretch bg-zinc-300 flex shrink-0 h-px flex-col mt-10 max-md:max-w-full" />
          <div className="self-stretch mt-10 max-md:max-w-full">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-3/12 max-md:w-full max-md:ml-0">
                <div className="items-stretch self-stretch flex flex-col max-md:mt-6">
                  <div className="text-zinc-800 text-lg font-semibold leading-7">
                    Research
                  </div>
                  <div className="text-zinc-600 text-base leading-6 mt-6">
                    Blogs
                  </div>
                  <div className="text-zinc-600 text-base leading-6 mt-3">
                    Articles
                  </div>
                  <div className="text-zinc-600 text-base leading-6 mt-3">
                    Events
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
                <div className="items-stretch self-stretch flex grow flex-col max-md:mt-6">
                  <div className="text-zinc-800 text-lg font-semibold leading-7">
                    Community
                  </div>
                  <div className="text-zinc-600 text-base leading-6 mt-6">
                    Doctors
                  </div>
                  <div className="text-zinc-600 text-base leading-6 mt-3">
                    Community
                  </div>
                  <div className="text-zinc-600 text-base leading-6 mt-3">
                    Yoga Centres
                  </div>
                  <div className="text-zinc-600 text-base leading-6 mt-3">
                    Our Programs
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
                <div className="items-stretch self-stretch flex grow flex-col max-md:mt-6">
                  <div className="text-zinc-800 text-lg font-semibold leading-7">
                    About us
                  </div>
                  <div className="text-zinc-600 text-base leading-6 mt-6">
                    About us
                  </div>
                  <div className="text-zinc-600 text-base leading-6 mt-3">
                    Help
                  </div>
                  <div className="text-zinc-600 text-base leading-6 mt-3">
                    Terms and Conditions
                  </div>
                  <div className="text-zinc-600 text-base leading-6 mt-3">
                    Legal
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
                <div className="items-stretch self-stretch flex flex-col max-md:mt-6">
                  <div className="text-zinc-800 text-lg font-semibold leading-7">
                    Contact us
                  </div>
                  <div className="items-stretch flex justify-between gap-2 mt-6">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/39901a4c78460f752b9f73dff54eaef2e858a67a57ec43c77706d6e422c33aae?"
                      className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                    />
                    <div className="text-zinc-600 text-base leading-6 grow shrink basis-auto">
                      eazypregnancy@email.com
                    </div>
                  </div>
                  <div className="items-stretch flex justify-between gap-2 mt-3">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/9501d971c9092ad74c175fdc7fd788df196bf8f90eecfd967b3be0c0af9e77f9?"
                      className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                    />
                    <div className="text-zinc-600 text-base leading-6 grow shrink basis-auto">
                      +91 99999 77777
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch bg-zinc-300 flex shrink-0 h-px flex-col mt-10 max-md:max-w-full" />
          <div className="text-zinc-600 text-base leading-6 self-center whitespace-nowrap mt-4">
            Copyright text
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyComponent;
