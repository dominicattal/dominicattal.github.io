import { useNavigate } from "react-router-dom";
import GithubButton from "./GithubButton";
import LinkedinButton from "./LinkedinButton";
import ProjectCard from "./ProjectCard";

export default function Home() {
  const navigate = useNavigate();
  return (
    <main className="min-h-screen bg-neutral-600 text-white">
      <section className="flex flex-col md:flex-row min-h-screen px-8 h-screen">
        <div className="flex flex-1 items-center">
          <div className="mx-auto max-w-4xl">
            <h1 className="text-center md:text-left mt-4 mb-4 text-4xl font-bold tracking-tight md:text-6xl">
              Dominic Attalienti
            </h1>

            <h2 className="mb-6 text-sm text-zinc-300 md:text-xl">
              Recent college graduate interested in creating good software
            </h2>

            <div className="flex justify-center md:justify-start gap-2">
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
              description={[
                "Worked in an interdisciplinary Agile team to connect an Arduino RP2040 microcontroller to a Unity scene running on the Meta Quest 3 virtual reality headset over Bluetooth Low Energy."
              ]}
            />
            <ProjectCard
              title="Internet Movie Database Platform"
              keywords={["HTML", "CSS", "Javascript", "MySQL", "PHP", "RabbitMQ", "Linux", "VMWare", "OracleBox"]}
              description={[
                "This is a test for short description"
              ]}
              github="github fi there is one"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
