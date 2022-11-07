import React from "react";
import "./App.css";
import { MdPlayCircleFilled, MdArrowRightAlt } from "react-icons/md";
import IconSocialy from "./assets/logo.png";
import stars from "./assets/stars.png";
import trustpilot from "./assets/trustpilot.png";
import illustration1 from "./assets/illustration1.png";
import illustration2 from "./assets/illustration2.png";
import illustration3 from "./assets/illustration3.png";
import iconchat from "./assets/realtime_chat.png";
import iconchatbot from "./assets/chatbot.png";
import iconaction from "./assets/action.png";

function App() {
  const menus = ["Demos", "About", "Blog", "Pages", "Contact"];
  const benefit = [
    {
      icon: "iconchat",
      title: "Chat in real-time",
      subtitle:
        "Set clear expectations with customers based on your team's bandwidth.",
    },
    {
      icon: "iconchatbot",
      title: "Time with chatbots",
      subtitle:
        "Help users help themselves with powerful bots for support and sales.",
    },
    {
      icon: "iconchatbot",
      title: "Action with integrate",
      subtitle:
        "Integrate with 300+ apps, or build your own. You can use them in conversations.",
    },
  ];
  const section = [
    {
      number: "1.6x",
      label: "Tickets when using the Socialy Messenger",
    },
    {
      number: "90.7%",
      label: "Socialy customers see a median CSAT of 90.7%",
    },
    {
      number: "37%",
      label: "Lower time to resolution when using the Socialy",
    },
  ];

  return (
    <div className=" bg-white pb-5 max-w-full">
      <header className="container max-w-full bg-gray-100 mx-auto flex items-center py-3 px-36 space-x-40">
        <div>
          <img src={IconSocialy} alt="logo" class="w-20" />
        </div>
        <div className="flex-1">
          <ul className="flex flex-row space-x-6 font-medium">
            {menus.map((val, index) => (
              <li key={index}>{val}</li>
            ))}
          </ul>
        </div>
        <div className="space-x-6">
          <button className="font-medium">Sign In</button>
          <button class="bg-red-500 text-white font-medium px-5 py-3 rounded">
            Get Started Free
          </button>
        </div>
      </header>

      <main className="container max-w-full mx-auto text-center">
        <div className="bg-gray-100 py-20 ">
          <h1 className="font-bold text-7xl pt-8 pb-2">
            Customer messaging
            <br />
            that fits your business
          </h1>
          <div className="font-normal text-xl pt-5 text-slate-600">
            Transform the way you work with one place for everyone
            <br />
            and everything you need to get stuff done.
          </div>
          <div class="max-w-xl mx-auto space-x-6 mt-8 grid grid-cols-2">
            <button class="bg-red-500 text-white font-medium px-5 py-3 rounded">
              Start 14 Days Free Trial
            </button>
            <button class="flex flex-nowrap bg-white font-medium px-5 py-3 rounded items-center justify-center">
              <MdPlayCircleFilled />
              <p className="pl-3">Watch A Demo</p>
            </button>
          </div>
          <div class="max-w-xl mx-auto mt-10 flex flex-auto items-end space-x-2 justify-center">
            <img src={trustpilot} alt="trustpilot" class="h-7" />
            <div className="items-center flex flex-row space-x-3">
              <img src={stars} alt="stars" class="h-6" />
              <p className="text-slate-500 text-xs"> 4900+ 5 Stars</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 my-15 mx-36 items-center space-x-20">
          <h2 className="mt-20 font-bold text-5xl pt-5 pb-5 text-left">
            Live chat is only the beginning
          </h2>
          <p className="mt-20 pt-5 pb-5 text-slate-600 text-left ">
            Set clear expectations with customers based on
            <br />
            your team's bandwidth, and collect upfront
            <br />
            information for follow-up later.
          </p>
        </div>

        <div className="py-20">
          <div className="grid grid-cols-3 mx-auto py-14 px-40">
            {benefit.map((val, index) => {
              return (
                <div
                  key={index}
                  className="flex-flex-row border rounded-xl mx-5 px-10 py-10 text-left"
                >
                  <img src={val.icon} className="w-6" />
                  <div className="text-xl font-bold py-2">{val.title}</div>
                  <div className="text-slate-500 text-sm">{val.subtitle}</div>
                  <button className="flex flex-nowrap items-center text-red-500 font-semibold pt-10">
                    Discover More
                    <MdArrowRightAlt />
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-2 mt-32 mx-28 items-center">
          <img src={illustration1} alt="logo" class="ml-8 w-2/3" />
          <div>
            <h2 className=" font-bold text-5xl pb-5 text-left">
              Everyone wins with a conversational approach
            </h2>
            <div className="text-left text-lg text-slate-600">
              Engage customers at the exact moment they're ready to buy, whether
              on your website or in your app.
              <br />
              <br />
              Socialy connects your tools and workflows so you can communicate
              personally at scale.
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 my-28 mx-28 items-center">
          <div class="ml-8">
            <div className="font-bold text-5xl pb-5 text-left">
              We help you to grow faster and better
            </div>
            <div className="text-left text-lg text-slate-600">
              Phone and email only? Give your customers more. Intercom has
              convenient whenever, wherever messaging that works in app, online,
              and on mobile for super quick and easy support.
              <br />
              <br />
              For all those times your customers waited to reach someone on your
              team
            </div>
          </div>
          <img src={illustration2} alt="logo" class="w-2/3 ml-28" />
        </div>

        <div className="grid grid-cols-3 mx-auto bg-gray-100 py-14 px-32">
          {section.map((val, index) => {
            return (
              <div key={index} className="flex-flex-row w-40 mx-auto ">
                <div className="text-6xl font-bold py-2">{val.number}</div>
                <div className="text-slate-500 text-sm">{val.label}</div>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-2 mt-32 mx-28 items-center">
          <img src={illustration3} alt="logo" class="ml-8 w-2/3" />
          <div>
            <h2 className="font-bold text-5xl pb-10 text-left">
              Cohesive and coordinated campaigns
            </h2>
            <div className="text-left text-lg text-slate-600 font-bold pb-2">
              In-product messages
            </div>
            <div className="text-left text-lg text-slate-600">
              Share automated messages with quick, conversational chats, or use
              attention-grabbing posts for more important updates.
              <br />
              <br />
            </div>
            <div className="text-left text-lg text-slate-600 font-bold pb-2">
              Better customer experience
            </div>
            <div className="text-left text-lg text-slate-600">
              Convert more website visitors into customers with targeted
              messages, bots, and real-time chat.
            </div>
          </div>
        </div>

        <div className="py-20 my-44 mx-auto rounded-3xl bg-amber-400 text-center align-middle w-4/5">
          <div className="mx-auto text-slate-50 font-bold text-5xl pb-5 text-center">
            Want to talk to a <br /> marketing expert?
          </div>
          <button class="bg-red-500 text-white font-medium mt-10 px-5 py-3 rounded">
            Contact With Us
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;
