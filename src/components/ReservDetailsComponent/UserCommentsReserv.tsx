// import React, { useState } from "react";
// import { FiHeart, FiMessageSquare } from "react-icons/fi";
// import ChipText from "../common/chipLabel/ChipText";

// export default function UserComments() {
//   const [comments, setComments] = useState([
//     {
//       id: 1,
//       user: "کاربر 1",
//       date: "۱۴ اردیبهشت ۱۴۰۴",
//       text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ.",
//       likes: 12,
//       liked: false,
//       replies: [
//         {
//           id: 1,
//           text: "این یک پاسخ به نظر است.",
//           date: "۱۴ اردیبهشت ۱۴۰۴",
//           likes: 3,
//           liked: false,
//         },
//       ],
//     },
//     {
//       id: 2,
//       user: "کاربر 2",
//       date: "۱۵ اردیبهشت ۱۴۰۴",
//       text: "این یک نظر آزمایشی دیگر است.",
//       likes: 5,
//       liked: false,
//       replies: [],
//     },
//   ]);

//   const handleLike = (commentId, replyId = null) => {
//     setComments((prevComments) =>
//       prevComments.map((comment) => {
//         if (comment.id === commentId) {
//           if (replyId !== null) {
//             return {
//               ...comment,
//               replies: comment.replies.map((reply) =>
//                 reply.id === replyId
//                   ? {
//                       ...reply,
//                       liked: !reply.liked,
//                       likes: reply.liked ? reply.likes - 1 : reply.likes + 1,
//                     }
//                   : reply
//               ),
//             };
//           } else {
//             return {
//               ...comment,
//               liked: !comment.liked,
//               likes: comment.liked ? comment.likes - 1 : comment.likes + 1,
//             };
//           }
//         }
//         return comment;
//       })
//     );
//   };

//   const handleReply = (id, replyText) => {
//     if (replyText.trim() === "") return;
//     setComments((prevComments) =>
//       prevComments.map((comment) =>
//         comment.id === id
//           ? {
//               ...comment,
//               replies: [
//                 ...comment.replies,
//                 {
//                   id: Date.now(),
//                   text: replyText,
//                   date: new Date().toLocaleDateString("fa-IR"),
//                   likes: 0,
//                   liked: false,
//                 },
//               ],
//             }
//           : comment
//       )
//     );
//   };

//   return (
//     <div className="space-y-8 mt-16">
//       {/* <h3 className="text-lg font-semibold">نظرات کاربران</h3> */}
//            <ChipText ChipText={"نظرات کاربران "} />
//         <span className="text-[#7575FE] mr-10">+ نظر شما </span>
//       {comments.map((comment) => (
//         <div key={comment.id} className="bg-gray-50  dark:bg-slate-800 p-3 rounded-md space-y-2 ">
//           <div className="flex justify-between items-center">
//             <p className="text-sm font-semibold ">{comment.user}</p>
//             <span className="text-xs text-gray-500 dark:text-white">{comment.date}</span>
//           </div>
//           <p className="text-sm text-gray-600 dark:text-white">{comment.text}</p>
//           <div className="flex items-center justify-between">
//             <div className="flex items-center space-x-3">
//               <button
//                 className="flex items-center"
//                 onClick={() => handleLike(comment.id)}
//               >
//                 <FiHeart
//                   className={`mr-1 transition ${
//                     comment.liked ? "text-red-600 fill-current" : "text-gray-500 dark:text-white"
//                   }`}
//                   style={{ fill: comment.liked ? "red" : "none" }}
//                 />
//                 <span>{comment.likes}</span>
//               </button>
//               <button className="flex items-center text-blue-600">
//                 <FiMessageSquare className="mr-1" />
//                 <span>پاسخ</span>
//               </button>
//             </div>
//           </div>

//           {/* پاسخ‌ها */}
//           {comment.replies.length > 0 && (
//             <div className="mt-2 space-y-2 pl-4 border-l-2 border-blue-300">
//               {comment.replies.map((reply) => (
//                 <div key={reply.id} className="text-sm text-gray-700 dark:text-white flex justify-between">
//                   <div>
//                     <p>{reply.text}</p>
//                     <span className="text-xs text-gray-400 dark:text-white">{reply.date}</span>
//                   </div>
//                   <div className="flex items-center space-x-2">
//                     <button
//                       className="flex items-center"
//                       onClick={() => handleLike(comment.id, reply.id)}
//                     >
//                       <FiHeart
//                         className={`mr-1 transition ${
//                           reply.liked ? "text-red-600 fill-current" : "text-gray-500 dark:text-white"
//                         }`}
//                         style={{ fill: reply.liked ? "red" : "none" }}
//                       />
//                       <span>{reply.likes}</span>
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
//           {/* فرم پاسخ */}
//           <ReplyForm commentId={comment.id} onReply={handleReply} />
//         </div>
//       ))}
//       <button className="mt-2 text-blue-600 font-semibold">مشاهده نظرات بیشتر</button>
//     </div>
//   );
// }

// // فرم پاسخ‌دهی به هر نظر
// function ReplyForm({ commentId, onReply }) {
//   const [replyText, setReplyText] = useState("");

//   const handleReplySubmit = (e) => {
//     e.preventDefault();
//     onReply(commentId, replyText);
//     setReplyText("");
//   };

//   return (
//     <form onSubmit={handleReplySubmit} className="flex items-center mt-2 space-x-2">
//       <input
//         type="text"
//         value={replyText}
//         onChange={(e) => setReplyText(e.target.value)}
//         placeholder="پاسخ خود را بنویسید..."
//         className="w-full px-3 py-1 text-sm  rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//       />
//       <button type="submit" className="text-blue-600 font-semibold">
//         ارسال
//       </button>
//     </form>
//   );
// }
   

import React, { useState } from "react";
import { FiHeart, FiChevronDown, FiChevronUp } from "react-icons/fi";
import ChipText from "../common/chipLabel/ChipText";

export default function UserComments() {
  const [comments, setComments] = useState([
    {
      id: 1,
      user: "عباس بهبودی",
      date: "۱۵ اردیبهشت ۱۴۰۴",
      text: "راضی نبودم، جرت مصرف بود این هتل. ۲۵۰ موقعیت بناتی داشتم نگرفتن برامون.",
      likes: 12,
      liked: false,
      showReplyForm: false,
      showReplies: false,
      replies: [
        {
          id: 11,
          user: "کاربر ۲",
          date: "۱۵ اردیبهشت ۱۴۰۴",
          text: "این یک پاسخ به نظر است.",
          likes: 3,
          liked: false,
          showReplyForm: false,
        },
      ],
    },
    {
            id: 2,
            user: "کاربر 2",
            date: "۱۵ اردیبهشت ۱۴۰۴",
            text: "این یک نظر آزمایشی دیگر است.",
            likes: 5,
            liked: false,
             replies: [],
         },
  ]);

  // لایک یا آنلایک کامنت یا پاسخ
  const toggleLike = (commentId, replyId = null) => {
    setComments((prev) =>
      prev.map((comment) => {
        if (comment.id === commentId) {
          if (replyId !== null) {
            return {
              ...comment,
              replies: comment.replies.map((reply) =>
                reply.id === replyId
                  ? {
                      ...reply,
                      liked: !reply.liked,
                      likes: reply.liked ? reply.likes - 1 : reply.likes + 1,
                    }
                  : reply
              ),
            };
          } else {
            return {
              ...comment,
              liked: !comment.liked,
              likes: comment.liked ? comment.likes - 1 : comment.likes + 1,
            };
          }
        }
        return comment;
      })
    );
  };

  // باز و بسته کردن فرم پاسخ دادن اصلی یا پاسخ به پاسخ
  const toggleReplyForm = (commentId, replyId = null) => {
    setComments((prev) =>
      prev.map((comment) => {
        if (comment.id === commentId) {
          if (replyId !== null) {
            return {
              ...comment,
              replies: comment.replies.map((reply) =>
                reply.id === replyId
                  ? { ...reply, showReplyForm: !reply.showReplyForm }
                  : { ...reply, showReplyForm: false }
              ),
              // کامنت اصلی فرم پاسخ را می بندیم اگر پاسخ باز شد
              showReplyForm: false,
            };
          } else {
            return {
              ...comment,
              showReplyForm: !comment.showReplyForm,
              // بستن فرم پاسخ پاسخ‌ها اگر فرم اصلی باز شد
              replies: comment.replies.map((r) => ({ ...r, showReplyForm: false })),
            };
          }
        }
        return comment;
      })
    );
  };

  // باز و بسته کردن مشاهده پاسخ ها (اکاردیون)
  const toggleReplies = (commentId) => {
    setComments((prev) =>
      prev.map((comment) =>
        comment.id === commentId
          ? { ...comment, showReplies: !comment.showReplies }
          : comment
      )
    );
  };

  // ارسال پاسخ به کامنت اصلی یا پاسخ
  const addReply = (commentId, replyText, replyId = null) => {
    if (replyText.trim() === "") return;

    setComments((prev) =>
      prev.map((comment) => {
        if (comment.id === commentId) {
          if (replyId !== null) {
            // اضافه کردن پاسخ به یک پاسخ (می‌تونی بنا به نیاز این بخش رو حذف یا تغییر بدی)
            // الان پاسخ به پاسخ ذخیره نمی‌کنیم (برای ساده بودن)
            return comment;
          } else {
            return {
              ...comment,
              replies: [
                ...comment.replies,
                {
                  id: Date.now(),
                  user: "شما",
                  date: new Date().toLocaleDateString("fa-IR"),
                  text: replyText,
                  likes: 0,
                  liked: false,
                  showReplyForm: false,
                },
              ],
              showReplyForm: false,
              showReplies: true, // باز کردن پاسخ‌ها بعد از ارسال پاسخ
            };
          }
        }
        return comment;
      })
    );
  };

  // فرم پاسخ با قابلیت ارسال با دکمه و اینتر
  const ReplyInput = ({ onSubmit }) => {
    const [text, setText] = useState("");

    const submit = () => {
      if (text.trim()) {
        onSubmit(text);
        setText("");
      }
    };

    return (
      <div className="mt-2 flex space-x-2 rtl">
        <input
          type="text"
          placeholder="پاسخ خود را بنویسید..."
          className="flex-grow px-3 py-2 border rounded text-sm"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              submit();
            }
          }}
        />
        <button
          onClick={submit}
          className="bg-blue-600 text-white px-4 rounded text-sm hover:bg-blue-700"
        >
          ارسال
        </button>
      </div>
    );
  };

  return (
    <div className=" w-full mx-auto p-4 m-2 space-y-8">

       {comments.map((comment) => (
        <div
          key={comment.id}
          className="bg-gray-50 dark:bg-slate-800 p-4 rounded shadow-sm"
        >
          {/* نام کاربر و تاریخ */}
          <div className="flex justify-between items-center mb-1">
            <p className="font-semibold">{comment.user}</p>
            <span className="text-xs text-gray-500 dark:text-gray-300">
              در {comment.date}
            </span>
          </div>

          {/* متن نظر */}
          <p className="text-gray-800 dark:text-gray-100 mb-3">{comment.text}</p>

          {/* امتیاز، قلب و پاسخ دادن و مشاهده پاسخ‌ها */}
          <div className="flex items-center space-x-6 rtl">
            {/* امتیاز و قلب */}
            <button
              onClick={() => toggleLike(comment.id)}
              className="flex items-center space-x-1 text-gray-600 dark:text-gray-300 hover:text-red-600"
            >
              <FiHeart
                className="text-xl"
                fill={comment.liked ? "red" : "none"}
                stroke={comment.liked ? "red" : "currentColor"}
              />
              <span>{comment.likes}</span>
            </button>

            {/* پاسخ دادن */}
            <button
              onClick={() => toggleReplyForm(comment.id)}
              className="text-blue-600 hover:underline"
            >
              پاسخ دادن
            </button>

            {/* مشاهده پاسخ‌ها آکاردیون */}
            {comment.replies.length > 0 && (
              <button
                onClick={() => toggleReplies(comment.id)}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 flex items-center"
              >
                {comment.showReplies ? (
                  <>
                    <FiChevronUp />
                    <span className="mr-1">پاسخ‌ها</span>
                  </>
                ) : (
                  <>
                    <FiChevronDown />
                    <span className="mr-1">مشاهده پاسخ‌ها</span>
                  </>
                )}
                <span className="mr-1 text-sm text-gray-400 dark:text-gray-300">
                  {comment.replies.length}
                </span>
              </button>
            )}
          </div>

          {/* فرم پاسخ برای کامنت اصلی */}
          {comment.showReplyForm && (
            <ReplyInput
              onSubmit={(text) => addReply(comment.id, text)}
            />
          )}

          {/* پاسخ‌ها */}
          {comment.showReplies && (
            <div className="mt-4 space-y-4 border-l-2 border-blue-300 rtl pl-4">
              {comment.replies.map((reply) => (
                <div
                  key={reply.id}
                  className="bg-gray-100 dark:bg-slate-700 p-3 rounded flex flex-col space-y-2"
                >
                  {/* نام کاربر و تاریخ پاسخ */}
                  <div className="flex justify-between items-center">
                    <p className="font-semibold text-sm">{reply.user || "کاربر ناشناس"}</p>
                    <span className="text-xs text-gray-500 dark:text-gray-400">{reply.date}</span>
                  </div>

                  {/* متن پاسخ */}
                  <p className="text-gray-700 dark:text-gray-200">{reply.text}</p>

                  {/* دکمه‌های لایک و ریپلای */}
                  <div className="flex items-center space-x-4 rtl">
                    <button
                      onClick={() => toggleLike(comment.id, reply.id)}
                      className="flex items-center space-x-1 text-gray-600 dark:text-gray-300 hover:text-red-600"
                    >
                      <FiHeart
                        className="text-lg"
                        fill={reply.liked ? "red" : "none"}
                        stroke={reply.liked ? "red" : "currentColor"}
                      />
                      <span>{reply.likes}</span>
                    </button>
                    <button
                      onClick={() => toggleReplyForm(comment.id, reply.id)}
                      className="text-blue-600 hover:underline"
                    >
                      پاسخ
                    </button>
                  </div>

                  {/* فرم پاسخ برای پاسخ */}
                  {reply.showReplyForm && (
                    <ReplyInput
                      onSubmit={(text) => {
                        /* می‌تونی اینجا برای پاسخ به پاسخ هم اضافه کنی */
                        // alert("فعلاً پاسخ به پاسخ اضافه نمی‌شود");
                      }}
                    />
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
