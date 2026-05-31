import { useNavigate } from "react-router-dom";
import GithubButton from "./GithubButton";
import LinkedinButton from "./LinkedinButton";
import ProjectCard from "./ProjectCard";

export default function Home() {
  const navigate = useNavigate();
  return (
    <main className="min-h-screen bg-neutral-600 text-white">
      <section className="flex flex-col md:flex-row min-h-screen px-8 h-screen">
        <div className="flex md:flex-1 pb-1 md:pb-0 items-center">
          <div className="mx-auto max-w-4xl">
            <h1 className="text-center md:text-left mt-4 mb-4 text-4xl font-bold tracking-tight md:text-6xl">
              Dominic Attalienti
            </h1>

            <h2 className="mb-6 text-sm text-zinc-300 md:text-xl">
              Recent college graduate interested in creating good software
            </h2>

            <div className="justify-center md:justify-start gap-2 hidden md:flex">
              <GithubButton />
              <LinkedinButton />
            </div>

          </div>
        </div>
        <div className="flex-1 overflow-y-auto">
          <div className="overflow-y-auto">
            <ProjectCard
              title="VR Rehabilitation Platform"
              keywords={["GCP", "C#", ".NET", "Visual Studio", "Unity"]}
              bullet_points={[
                "Worked in an interdisciplinary Agile team to connect an Arduino RP2040 microcontroller to a Unity scene running on the Meta Quest 3 virtual reality headset over Bluetooth Low Energy.",
                "Created a data logger that asynchronously copies and sends Meta Quest 3 headset data and Arduino RP2040 IMU data to the Cloud (GCP), facilitating later data analysis.",
                "Implemented Figma designs from another team in Unity by using Meta Quest 3 prefabs and TextMesh Pro, creating a seamless UI experience in VR."
              ]}
            />
            <ProjectCard
              title="Internet Movie Database Platform"
              keywords={["HTML & CSS", "Javascript", "MySQL", "PHP", "RabbitMQ", "Linux", "Apache", "OracleBox"]}
              bullet_points={[
                "Worked in an Agile team to develop a movie web application using PHP, MySQL, HTML, CSS, and JavaScript for browsing and reviewing movies.",
                "Created a distributed logging system with RabbitMQ managed by systemd for a cluster of virtual machines, isolating the frontend from the database queries.",
                "Implemented API response caching to reduce external requests and improve backend performance.",
                "Wrote Bash scripts to automate virtual machine configuration to accelerate development workflow."
              ]}
              github="https://github.com/dominicattal/rabbitmqphp_example"
            />
            <ProjectCard
              title="GPU-Accelerated Machine Learning Model"
              keywords={["C", "OpenCL", "Python"]}
              bullet_points={[
                "Prototyped a Variational Autoencoder in Python using PyTorch and developed a GPU-accelerated C/OpenCL implementation to improve computational efficiency.",
                "Optimized compute-intensive workloads using OpenCL kernels and low-level memory management techniques for parallel GPU execution.",
                "Used GDB and Valgrind on Linux to diagnose memory leaks, invalid memory access, and runtime errors during low-level systems debugging."
              ]}
              github="github.com/dominicattal/opencl"
            />
            <ProjectCard
              title="Competitive Programming Platform"
              keywords={["HTML & CSS", "Javascript", "PHP", "C", "SQLite"]}
              bullet_points={[
                "Prototyped a Variational Autoencoder in Python using PyTorch and developed a GPU-accelerated C/OpenCL implementation to improve computational efficiency.",
                "Optimized run handling using multi-threading, improving backend efficiency.",
                "Learned GDB and Valgrind on Linux to diagnose memory leaks, invalid memory access, and runtime errors during low-level systems debugging.",
                "Developed cross-platform networking layer in C compatible with both Windows and Linux socket APIs."
              ]}
              github="https://github.com/dominicattal/codecontest"
            />
            <ProjectCard
              title="Multithreaded Game Engine"
              keywords={["C", "OpenGL", "GLFW"]}
              bullet_points={[
                "Developed a multithreaded game engine in C using OpenGL for users to create levels based on a popular game.",
                "Separated rendering and game logic into parallel threads to improve frame consistency and runtime responsiveness.",
                "Implemented view and projection matrix transformations to map 3D coordinates into screen space."
              ]}
              github="https://github.com/dominicattal/soultaker"
            />
            <ProjectCard
              title="Multithreaded Voxel Renderer"
              keywords={["C", "OpenMP", "OpenGL", "GLFW"]}
              bullet_points={[
                "Developed a high-performance 3D voxel renderer in C using OpenGL featuring procedurally generated randomized terrain and real-time rendering pipelines.",
                "Parallelized terrain generation workloads with OpenMP to reduce chunk generation latency and improve runtime performance."
              ]}
              github="https://github.com/dominicattal/voxels"
            />
            <ProjectCard
              title="Gundam Marketplace Platform"
              keywords={["Angular", "Typescript", "Bootstrap", "Express", "MongoDB"]}
              bullet_points={[
                "Worked in Agile team to build a marketplace platform for Gundam figures featuring searchable listings, automated data aggregation, and a responsive frontend interface.",
                "Leveraged AI-assisted development workflows to accelerate implementation and streamline data acquisition pipelines.",
                "Implemented backend services in TypeScript to process, aggregate, and serve marketplace data efficiently."
              ]}
              github="https://github.com/dominicattal/it340-project"
            />
            <ProjectCard
              title="AI Resume Analyzer"
              keywords={["React", "OpenAI API", "Javascript", "Express"]}
              bullet_points={[
                "Collaborated with an Agile team to develop AI-powered resume analysis web application.",
                "Integrated LLM APIs to generate resume improvement suggestions based on job descriptions and user skillsets."
              ]}
              github="https://github.com/soiafu/resume_analyzer_team7"
            />
            <ProjectCard
              title="Decision Tree"
              keywords={["C"]}
              bullet_points={[
                "Developed a decision tree classifier in C that constructs best-fit models from tabular datasets using recursive partitioning algorithms.",
                "Tested on several datasets including iris, bikes, diabetes, and MNIST hand-written digits.",
                "Parallelized dataset processing and tree construction using multithreading to improve training performance."
              ]}
              github="https://github.com/dominicattal/decision-tree"
            />
            <ProjectCard
              title="Json Parser"
              keywords={["C"]}
              bullet_points={[
                "Programmed simple open-source C API for reading json files, including CRUD operations for all json types.",
                "Created many tests to verify the parser worked correctly."
              ]}
              github="https://github.com/dominicattal/json-parser"
            />
            <ProjectCard
              title="AI Models Performance Analysis"
              keywords={["Python"]}
              bullet_points={[
                "Analyzed the performance and cost efficiency of several popular AI models.",
                "Created many tests to verify the parser worked correctly."
              ]}
              github="https://github.com/dominicattal/ai-model-analysis"
            />
            <ProjectCard
              title="History Research Report"
              keywords={["Python", "MS Word", "MS Excel"]}
              bullet_points={[
                "Conducted original research on an organization’s treasury reports from the 1950s-1970s.",
                "Used pandas to manipulate data and matplotlib to visualize data."
              ]}
              github="https://github.com/dominicattal/history-research"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
