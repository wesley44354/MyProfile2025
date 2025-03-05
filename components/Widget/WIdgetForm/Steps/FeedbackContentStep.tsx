import { ArrowLeft, Camera } from "phosphor-react";
import { FormEvent, useState } from "react";
import { FeedbackType, feedbackTypes } from "..";
import { api } from "../../../../lib/api";
import { CloseButton } from "../../CloseButton"
import { Loading } from "../Loading";
import { ScreenshotButton } from "../ScreenshotButton";

interface FeedbackContentStepProps {
  feedbackType: FeedbackType;
  onFeedbackStartRequested: () => void;
  onFeedbackSent: () => void;
}

export const FeedbackContentStep = ({ feedbackType, onFeedbackStartRequested, onFeedbackSent, }: FeedbackContentStepProps) => {

  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [comment, setComment] = useState('');
  const [isSendingFeedback, setIsSendingFeedback] = useState(false);

  const feedbackTypeInfo = feedbackTypes[feedbackType];

  async function handleSubmitFeedback(event: FormEvent) {
    event.preventDefault();

    setIsSendingFeedback(true);
    await api.post('/feedbacks', {
      type: feedbackType,
      comment,
      screenshot
    })

    setIsSendingFeedback(false);
    onFeedbackSent();
  }
  return (
    <>
    <header>
      <button type="button" className="absolute top-5 left-5 hover:text-zinc-500 transition-colors" onClick={onFeedbackStartRequested}>
        <ArrowLeft weight="bold" className="w-4 h-4" />
      </button>
    <span className="text-xl leading-6 flex items-center gap-2">
      <img src={feedbackTypeInfo.image.source} alt={feedbackTypeInfo.image.alt} className="w-6 h-6"/>
      {feedbackTypeInfo.title}
      </span>
    <CloseButton />
    </header>
    <form className="my-4 w-full" onSubmit={handleSubmitFeedback}>
      <textarea className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-500 dark:placeholder-zinc-400 dark:text-zinc-100 text-zinc-800 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 resize-none focus-outline-none scrollbar-thumb-zinc-700 scrollbar-trac-transparent scrollbar-thin" placeholder="Conte com detalhes o que está acontecendo..."  onChange={event => setComment(event.target.value)}/>
      <footer className="flex gap-2 mt-2">

        <ScreenshotButton screenshot={screenshot} onScreenshotTook={setScreenshot} />
        <button type="submit" disabled={comment.length === 0 || isSendingFeedback} className="text-white p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:hover:bg-brand-500">{isSendingFeedback ? <Loading /> : 'Enviar Feedback'}</button>
    </footer>
    </form>
  </>
  )
}
