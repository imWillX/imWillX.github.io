import * as React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'

// markup
const IndexPage = () => {
  return (
    <main>
      <title>William Xu</title>
      <div className="relative bg-white overflow-hidden">
        <div className="absolute top-10 right-0 px-4">
          <div className="block mr-10 space-x-4">
            <a href="https://github.com/imWillX" className="font-medium text-gray-900">
              <FontAwesomeIcon className="mr-1" icon={faGithub}></FontAwesomeIcon>
              <div className="inline-block text-gray-500 hover:text-gray-900">Github</div>
            </a>
            <a href="https://www.linkedin.com/in/imwillx" className="font-medium text-gray-500 hover:text-gray-900">
              <FontAwesomeIcon className="mr-1" icon={faLinkedin}></FontAwesomeIcon>
              LinkedIn
            </a>
          </div>
        </div>
        <div className="mt-10 mx-auto max-w-7xl p-16">
          <h1 className="text-5xl font-bold mb-8">
            Hi, I'm Will!
          </h1>
          <div className="text-2xl lg:text-xl">
            <div className="block mb-2">
            I'm Will Xu, a Software Engineer based in California with a passion in distributed systems.
            </div>
            <div className="block">
            Previously graduated from University of California, San Diego with a computer science degree.
            </div>
          </div>
        </div>

      </div>
    </main>
  )
}

export default IndexPage
