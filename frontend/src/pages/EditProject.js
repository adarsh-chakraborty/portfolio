import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from '../api/axios';
import loadingSvg from '../components/loading.svg';
import AppContext from '../context/app-context';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';

const EditProject = () => {
  const { projectId } = useParams();
  const [fetching, setFetching] = useState(true);
  const [projectTitle, setProjectTitle] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [projectImage, setProjectImage] = useState('');
  const [featured, setFeatured] = useState(false);
  const [gitUrl, setGitUrl] = useState('');
  const [liveUrl, setLiveUrl] = useState('');
  const [tools, setTools] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [loading, setLoading] = useState(false);
  const ctx = useContext(AppContext);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const res = await axios.get(`/projects/${projectId}`);
        console.log(res.data);
        setProjectTitle(res.data.title);
        setProjectDescription(res.data.description);
        setProjectImage(res.data.img);
        setFeatured(res.data.featured);
        setGitUrl(res.data.gitUrl);
        setLiveUrl(res.data.liveUrl);
        setTools(res.data.tools.join(', '));
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };

    fetchProject();
  }, [projectId]);

  const handleSubmit = async (e) => {
    setLoading(true);
    setError(null);
    setSuccess(null);
    e.preventDefault();

    const project = {
      projectTitle,
      projectDescription,
      projectImage,
      featured,
      gitUrl,
      liveUrl,
      tools
    };

    try {
      // edit the project
      const res = await axios.put(`/projects/${projectId}`, project, {
        headers: {
          Authorization: `Bearer ${ctx.token}`,
          'Content-Type': 'application/json'
        }
      });

      console.log(res.data.message);
      setSuccess(res.data.message);
      setLoading(false);
    } catch (err) {
      console.log(err);
      const errMsg = err?.response?.data?.error
        ? err.response.data.error
        : err.message;
      setError(errMsg);
      setLoading(false);
    }

    setProjectTitle('');
    setProjectDescription('');
    setProjectImage('');
    setFeatured(false);
    setGitUrl('');
    setLiveUrl('');
    setTools('');
  };

  return (
    <div className="min-h-screen w-screen bg-gray-100 ">
      <div className="container  mx-auto h-full pb-8">
        <div className="flex justify-center gap-[15rem] pt-8">
          <h1 className="text-4xl font-bold font-Poppins mx-16">
            Edit Project
          </h1>
          <div className="flex gap-5">
            <Link
              to="/dashboard"
              className="bg-white shadow-md hover:shadow-lg rounded-lg py-2 px-4"
            >
              Back to Dashboard
            </Link>
            <button className="bg-white shadow-md hover:shadow-lg rounded-lg py-2 px-4">
              Logout
            </button>
          </div>
        </div>

        <div className="flex justify-center items-center mt-3">
          {loading && (
            <img src={loadingSvg} alt="Processing.." className="w-[130px]" />
          )}
          {success && (
            <div className="text-center text-green-700 font-bold text-xl bg-green-100 rounded-md shadow-md border border-green-800 py-3 px-6">
              {success}
            </div>
          )}

          {error && (
            <div className="text-center text-red-600 font-bold text-xl bg-red-100 rounded-md shadow-md border border-red-800 py-3 px-6">
              {error}
            </div>
          )}
        </div>

        <div class="mt-8 bg-white rounded-md shadow-md p-6 max-w-2xl mx-auto">
          <form onSubmit={handleSubmit}>
            <div class="mb-4">
              <label
                for="project_title"
                class="block text-gray-700 font-medium mb-2"
              >
                Project Title
              </label>
              <input
                required
                type="text"
                id="project_title"
                name="project_title"
                value={projectTitle}
                onChange={(e) => setProjectTitle(e.target.value)}
                class="border border-gray-300 p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>
            <div class="mb-4">
              <label
                for="project_description"
                class="block text-gray-700 font-medium mb-2"
              >
                Project Description
              </label>
              <textarea
                required
                id="project_description"
                name="project_description"
                value={projectDescription}
                onChange={(e) => setProjectDescription(e.target.value)}
                class="border border-gray-300 p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              ></textarea>
            </div>
            <div class="mb-4">
              <label
                for="project_image"
                class="block text-gray-700 font-medium mb-2"
              >
                Project Image
              </label>
              <input
                required
                type="text"
                id="project_image"
                name="project_image"
                value={projectImage}
                onChange={(e) => setProjectImage(e.target.value)}
                class="border border-gray-300 p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>
            <div>
              <label
                htmlFor="is_featured"
                className="block text-gray-700 font-medium mb-2"
              >
                Featured:
                <button
                  id="is_featured"
                  type="button"
                  className={`${
                    featured ? 'bg-green-500' : 'bg-gray-500'
                  } relative inline-flex items-center h-6 rounded-full w-11 ml-4`}
                  onClick={() => setFeatured(!featured)}
                >
                  <span
                    className={`${
                      featured ? 'translate-x-6' : 'translate-x-1'
                    } inline-block w-4 h-4 transform bg-white rounded-full`}
                  />
                </button>
              </label>
            </div>

            <div class="mb-4">
              <label for="git_url" class="block text-gray-700 font-medium mb-2">
                Git URL
              </label>
              <input
                required
                type="text"
                id="git_url"
                name="git_url"
                value={gitUrl}
                onChange={(e) => setGitUrl(e.target.value)}
                class="border border-gray-300 p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>
            <div class="mb-4">
              <label
                for="live_url"
                class="block text-gray-700 font-medium mb-2"
              >
                Live URL
              </label>
              <input
                required
                type="text"
                id="live_url"
                name="live_url"
                value={liveUrl}
                onChange={(e) => setLiveUrl(e.target.value)}
                class="border border-gray-300 p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>
            <div class="mb-4">
              <label for="tools" class="block text-gray-700 font-medium mb-2">
                Tools
              </label>
              <input
                required
                value={tools}
                onChange={(e) => setTools(e.target.value)}
                type="text"
                id="tools"
                name="tools"
                class="border border-gray-300 p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
              <p class="text-gray-500 text-sm mt-2">
                Enter the tools used in the project separated by commas (e.g.
                HTML, CSS, JavaScript)
              </p>
            </div>
            <div class="mt-6 flex gap-4">
              <button
                type="submit"
                class="bg-indigo-500 text-white font-semibold py-2 px-4 rounded-md shadow-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Save Changes
              </button>
              <Link
                to="/dashboard"
                className="bg-gray-500 text-white font-semibold py-2 px-4 rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Back
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProject;
