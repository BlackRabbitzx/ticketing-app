import React from "react";

import { Button, Img, Line, Text } from "components";

const DesktopOnePage = () => {
  return (
    <>
      <div className="bg-gray-900 border border-black-900 border-solid flex flex-col font-inter items-center justify-start mx-auto p-3 shadow-bs w-full">
        <div className="flex flex-col justify-start max-w-[1386px] mb-[97px] mt-0.5 mx-auto md:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-[96%] md:w-full">
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
              size="txtInterRegular32"
            >
              Hello, Where would you like to watch?
            </Text>
            <div className="bg-blue_gray-800 flex sm:flex-col flex-row gap-[30px] items-end justify-center mb-[35px] md:mt-0 mt-[21px] p-[3px] rounded-[16px] shadow-bs">
              <div className="md:h-12 h-[43px] mb-3.5 ml-6 sm:ml-[0] relative w-[8%] sm:w-full">
                <Line className="absolute bg-black-900 bottom-[0] h-0.5 right-[8%] rotate-[-59deg] w-[23%]" />
                <Img
                  className="absolute h-[34px] inset-x-[0] mx-auto top-[0]"
                  src="images/img_contrast.svg"
                  alt="contrast"
                />
              </div>
              <Text
                className="mb-3 mr-[301px] sm:mt-0 mt-1.5 md:text-3xl sm:text-[28px] text-[32px] text-black-900_01"
                size="txtInterRegular32Black90001"
              >
                Search
              </Text>
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between ml-7 md:ml-[0] mt-[34px] w-[98%] md:w-full">
            <Text
              className="sm:text-4xl md:text-[38px] text-[40px] text-red-A700"
              size="txtInterRegular40"
            >
              Nearest Theaters
            </Text>
            <Text
              className="sm:text-4xl md:text-[38px] text-[40px] text-red-A700"
              size="txtInterRegular40"
            >
              <>Show All Theaters &gt;&gt;</>
            </Text>
          </div>
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start md:ml-[0] ml-[38px] mt-3 w-[88%] md:w-full">
            <Img
              className="h-[194px] sm:h-auto object-cover w-[24%] md:w-full"
              src="images/img_image15.png"
              alt="imageFifteen"
            />
            <Img
              className="h-[191px] sm:h-auto md:ml-[0] ml-[134px] object-cover w-[28%] md:w-full"
              src="images/img_image10.png"
              alt="imageTen"
            />
            <Img
              className="h-[191px] sm:h-auto md:ml-[0] ml-[108px] object-cover w-[30%] md:w-full"
              src="images/img_image11.png"
              alt="imageEleven"
            />
          </div>
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start md:ml-[0] ml-[110px] mt-[23px] w-4/5 md:w-full">
            <Button className="cursor-pointer font-semibold leading-[normal] min-w-[144px] text-2xl md:text-[22px] text-center sm:text-xl">
              Atrium XXI
            </Button>
            <Button className="cursor-pointer font-semibold leading-[normal] min-w-[185px] md:ml-[0] ml-[279px] text-2xl md:text-[22px] text-center sm:text-xl">
              Metropole XXI
            </Button>
            <Button className="cursor-pointer font-semibold leading-[normal] min-w-[261px] md:ml-[0] ml-[229px] text-2xl md:text-[22px] text-center sm:text-xl">
              Djakarta Theater XXI
            </Button>
          </div>
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start md:ml-[0] ml-[49px] mt-[99px] w-[87%] md:w-full">
            <Img
              className="h-[209px] sm:h-auto object-cover w-[26%] md:w-full"
              src="images/img_image12.png"
              alt="imageTwelve"
            />
            <Img
              className="h-[218px] sm:h-auto mb-[11px] md:ml-[0] ml-[91px] object-cover w-[30%] md:w-full"
              src="images/img_image13.png"
              alt="imageThirteen"
            />
            <Img
              className="h-[215px] sm:h-auto md:ml-[0] ml-[105px] md:mt-0 mt-3.5 object-cover w-[29%] md:w-full"
              src="images/img_image14.png"
              alt="imageFourteen"
            />
          </div>
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start md:ml-[0] ml-[58px] mt-10 w-[86%] md:w-full">
            <Button className="cursor-pointer font-semibold leading-[normal] min-w-[248px] text-2xl md:text-[22px] text-center sm:text-xl">
              Plaza Indonesia XXI
            </Button>
            <Button className="cursor-pointer font-semibold leading-[normal] min-w-[297px] md:ml-[0] ml-[171px] text-2xl md:text-[22px] text-center sm:text-xl">
              Cinema XXI GaMa Plaza
            </Button>
            <Button className="cursor-pointer font-semibold leading-[normal] min-w-[319px] ml-36 md:ml-[0] text-2xl md:text-[22px] text-center sm:text-xl">
              Cinema XXI. Senayan City
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopOnePage;
