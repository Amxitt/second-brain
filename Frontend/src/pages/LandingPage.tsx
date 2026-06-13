
import { BrainIcon } from "../icons/BrainIcon";
import { Button } from "../components/Ui library/Button";
import { useNavigate } from "react-router-dom";

export const LandingPage = ()=>{
const navigate = useNavigate();

    return (
  <div className="min-h-screen bg-gray-100">

    <div className="max-w-5xl mx-auto px-6 py-20">

      <div className="flex flex-col items-center text-center">

        <div className="text-purple-800">
          <BrainIcon size="lg" />
        </div>

        <h1 className="text-6xl font-bold mt-4">
          Second Brain
        </h1>

        <p className="mt-6 text-xl text-gray-600 max-w-xl">
          Save tweets, videos, documents and ideas.
          Build a personal knowledge base you can
          access and share anytime.
        </p>

        <div className="flex gap-4 mt-10">
          <Button
            variant="primary"
            size="md"
            text="Get Started"
            onClick={() => navigate("/signup")}
          />

          <Button
            variant="secondary"
            size="md"
            text="Sign In"
            onClick={() => navigate("/signin")}
          />
        </div>

      </div>

      <div className="grid md:grid-cols-3 gap-6 mt-24">

        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h3 className="font-semibold text-lg">
            Save Content
          </h3>

          <p className="text-gray-600 mt-3">
            Store tweets, videos and documents
            in a single workspace.
          </p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h3 className="font-semibold text-lg">
            Rich Previews
          </h3>

          <p className="text-gray-600 mt-3">
            Browse content using thumbnails
            and embedded previews.
          </p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h3 className="font-semibold text-lg">
            Share Your Brain
          </h3>

          <p className="text-gray-600 mt-3">
            Generate a public link and share
            your knowledge collection.
          </p>
        </div>

      </div>

    </div>

  </div>
);
}


