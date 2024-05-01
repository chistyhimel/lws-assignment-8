"use client";
import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "next-share";
import { useState } from "react";

export default function ShareButton({ recipeId }) {
  const [openShareDialog, setOpenShareDialog] = useState(false);
  return (
    <div className="relative">
      {openShareDialog && (
        <div className="absolute top-10 right-0 bg-gray-200 max-w-96 px-2 py-3 rounded flex justify-between gap-2">
          <FacebookShareButton
            url={`${process.env.NEXT_PUBLIC_SITE_URL}/recipe/${recipeId}`}
            hashtag={"#khanakhazana"}
          >
            <FacebookIcon size={32} round />
          </FacebookShareButton>
          <TwitterShareButton
            url={`${process.env.NEXT_PUBLIC_SITE_URL}/recipe/${recipeId}`}
          >
            <TwitterIcon size={32} round />
          </TwitterShareButton>
          <LinkedinShareButton
            url={`${process.env.NEXT_PUBLIC_SITE_URL}/recipe/${recipeId}`}
          >
            <LinkedinIcon size={32} round />
          </LinkedinShareButton>
          <WhatsappShareButton
            url={`${process.env.NEXT_PUBLIC_SITE_URL}/recipe/${recipeId}`}
            blankTarget
          >
            <WhatsappIcon size={32} round />
          </WhatsappShareButton>
        </div>
      )}
      <div
        onClick={() => setOpenShareDialog(!openShareDialog)}
        className={`flex gap-2 text-gray-600 cursor-pointer ${
          openShareDialog && "text-[#0E79F6]"
        } hover:text-[#0E79F6]`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M6 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
          <path d="M18 6m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
          <path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
          <path d="M8.7 10.7l6.6 -3.4" />
          <path d="M8.7 13.3l6.6 3.4" />
        </svg>
        <span>Share</span>
      </div>
    </div>
  );
}
