import bootstrap from "bootstrap";

const it101 = "The foundations of information technology (IT), including basic computer architecture, various kinds of computer hardware, and networking technology, are introduced. Various data representation schemes, such as the binary number systems, are covered. Different levels of software are examined, including aspects of the operating systems from the perspective of the IT professional. The software development process is discussed. Database management software and SQL are dealt with, as are applications and languages developed around the internet and Web infrastructure. Overall, fundamental knowledge required of today's IT professional is obtained along with an appreciation of IT's impact on business and society. Hands-on experience with some important elements of the IT field is gained through various laboratory assignments."
const cs100 = "An introduction to programming and problem solving skills using Python or other very high level language. Topics include basic strategies for problem solving, constructs that control the flow of execution of a program and the use of high level data types such as lists, strings and dictionaries in problem representation. The course also presents an overview of selected topics in computing, such as networking and databases."
const cs113 = "Intensive introduction to computer science. Problem solving decomposition. Writing, debugging, and analyzing computer programs. Introduction to arrays and lists. Iteration and recursion. The Java language is introduced and used to highlight these concepts."
const cs114 = "A study of advanced programming topics with logical structures of data, their physical representation, and the design of computer algorithms operating on the structures. Course covers program specifications, correctness and efficiency, data abstraction, and algorithm analysis."
const cs241 = "An introduction to the foundations of computer science with emphasis on the development of techniques for the design and proof of correctness of algorithms and the analysis of their computational complexity. Reasoning techniques based on propositional and predicate logic and relational calculus operations with applications to databases will also be introduced. Auxiliary topics such as combinatorics of finite sets, functions and relations, and graph-theory definitions and graph storage alternatives will also be examined."
const cs280 = "Conceptual study of programming language syntax, semantics and implementation. Course covers language definition structure, data types and structures, control structures and data flow, run-time consideration, and interpretative languages."
const cs288 = "The course covers Linux programming with Apache Web and MySql database using Php/Python and C as primary languages. It consists of four stages: basic tools such as Bash and C programming; searching trees and matrix computing, end-to-end applications such as one that constantly presents top 100 stocks; and extending the applications to run on multiple machines. The course provides students with hands-on experience for programming relatively large applications."
const cs301 = "This course is designed for CS BS students to equip them with introductory principles as well as hands-on skills that are required to solve data science problems. The first part of the course focuses on learning models, formalism, and algorithmic techniques that are popular in data science and heavily used in practice. In the second part of the course, students are introduced to data science tools (e.g., Excel, Python)."
const cs331 = "Database system architecture; data modeling using the entity-relationship model; storage of databases; the hierarchical, network and relational data models; formal and commercial query languages; functional dependencies and normalization for relational database design; relation decomposition; concurrency control and transactions management. Student projects involve the use of a DBMS package."
const cs332 = "Organization of operating systems covering structure, process management and scheduling; interaction of concurrent processes; interrupts; I/O, device handling; memory and virtual memory management and file management."
const cs341 = "This course provides an introduction to automata theory, computability theory, and complexity theory. Theoretical models such as finite-state machines, push-down stack machines, and Turing machines are developed and related to issues in programming language theory. Also, the course covers undecidability and complexity classes P, NP, and NPC."
const cs356 = "This course provides an introduction to computer networks, with a special focus on Internet architecture and protocols. Topics include layered-network architectures, addressing, naming, forwarding, routing, communication reliability, the client-server model, web and email protocols. Besides the theoretical foundations, students acquire practical experience by programming reduced versions of real Internet protocols."

function Courses() {
  return (
    <div>
      <h4>Courses</h4>
      <div class="d-flex align-items-start">
        <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
          <button class="nav-link active py-0" id="v-pills-it101-tab" data-bs-toggle="pill" data-bs-target="#v-pills-it101" type="button" role="tab" aria-controls="v-pills-it101" aria-selected="true">IT101</button>
          <button class="nav-link py-0" id="v-pills-cs100-tab" data-bs-toggle="pill" data-bs-target="#v-pills-cs100" type="button" role="tab" aria-controls="v-pills-cs100" aria-selected="false">CS100</button>
          <button class="nav-link py-0" id="v-pills-cs113-tab" data-bs-toggle="pill" data-bs-target="#v-pills-cs113" type="button" role="tab" aria-controls="v-pills-cs113" aria-selected="false">CS113</button>
          <button class="nav-link py-0" id="v-pills-cs114-tab" data-bs-toggle="pill" data-bs-target="#v-pills-cs114" type="button" role="tab" aria-controls="v-pills-cs114" aria-selected="false">CS114</button>
          <button class="nav-link py-0" id="v-pills-cs241-tab" data-bs-toggle="pill" data-bs-target="#v-pills-cs241" type="button" role="tab" aria-controls="v-pills-cs241" aria-selected="false">CS241</button>
          <button class="nav-link py-0" id="v-pills-cs280-tab" data-bs-toggle="pill" data-bs-target="#v-pills-cs280" type="button" role="tab" aria-controls="v-pills-cs280" aria-selected="false">CS280</button>
          <button class="nav-link py-0" id="v-pills-cs288-tab" data-bs-toggle="pill" data-bs-target="#v-pills-cs288" type="button" role="tab" aria-controls="v-pills-cs288" aria-selected="false">CS288</button>
          <button class="nav-link py-0" id="v-pills-cs301-tab" data-bs-toggle="pill" data-bs-target="#v-pills-cs301" type="button" role="tab" aria-controls="v-pills-cs301" aria-selected="false">CS301</button>
          <button class="nav-link py-0" id="v-pills-cs331-tab" data-bs-toggle="pill" data-bs-target="#v-pills-cs331" type="button" role="tab" aria-controls="v-pills-cs331" aria-selected="false">CS331</button>
          <button class="nav-link py-0" id="v-pills-cs332-tab" data-bs-toggle="pill" data-bs-target="#v-pills-cs332" type="button" role="tab" aria-controls="v-pills-cs332" aria-selected="false">CS332</button>
          <button class="nav-link py-0" id="v-pills-cs341-tab" data-bs-toggle="pill" data-bs-target="#v-pills-cs341" type="button" role="tab" aria-controls="v-pills-cs341" aria-selected="false">CS341</button>
          <button class="nav-link py-0" id="v-pills-cs356-tab" data-bs-toggle="pill" data-bs-target="#v-pills-cs356" type="button" role="tab" aria-controls="v-pills-cs356" aria-selected="false">CS356</button>
        </div>
        <div class="tab-content" id="v-pills-tabContent">
          <div class="tab-pane fade show active" id="v-pills-it101" role="tabpanel" aria-labelledby="v-pills-it101-tab" tabindex="0"><h5>Introduction to Information Technology</h5>{it101}</div>
          <div class="tab-pane fade" id="v-pills-cs100" role="tabpanel" aria-labelledby="v-pills-cs100-tab" tabindex="0"><h5>Roadmap to Computing</h5>{cs100}</div>
          <div class="tab-pane fade" id="v-pills-cs113" role="tabpanel" aria-labelledby="v-pills-cs113-tab" tabindex="0"><h5>Introduction to Computer Science I</h5>{cs113}</div>
          <div class="tab-pane fade" id="v-pills-cs114" role="tabpanel" aria-labelledby="v-pills-cs114-tab" tabindex="0"><h5>Introduction to Computer Science II</h5>{cs114}</div>
          <div class="tab-pane fade" id="v-pills-cs241" role="tabpanel" aria-labelledby="v-pills-cs241-tab" tabindex="0"><h5>Foundations of Computer Science I</h5>{cs241}</div>
          <div class="tab-pane fade" id="v-pills-cs280" role="tabpanel" aria-labelledby="v-pills-cs280-tab" tabindex="0"><h5>Programming Language Concepts</h5>{cs280}</div>
          <div class="tab-pane fade" id="v-pills-cs288" role="tabpanel" aria-labelledby="v-pills-cs288-tab" tabindex="0"><h5>Intensive Programming in Linux</h5>{cs288}</div>
          <div class="tab-pane fade" id="v-pills-cs301" role="tabpanel" aria-labelledby="v-pills-cs301-tab" tabindex="0"><h5>Introduction to Data Science</h5>{cs301}</div>
          <div class="tab-pane fade" id="v-pills-cs331" role="tabpanel" aria-labelledby="v-pills-cs331-tab" tabindex="0"><h5>Database System Design & Managament</h5>{cs331}</div>
          <div class="tab-pane fade" id="v-pills-cs332" role="tabpanel" aria-labelledby="v-pills-cs332-tab" tabindex="0"><h5>Principles of Operating Systems</h5>{cs332}</div>
          <div class="tab-pane fade" id="v-pills-cs341" role="tabpanel" aria-labelledby="v-pills-cs341-tab" tabindex="0"><h5>Foundations of Computer Science II</h5>{cs341}</div>
          <div class="tab-pane fade" id="v-pills-cs356" role="tabpanel" aria-labelledby="v-pills-cs356-tab" tabindex="0"><h5>Introduction to Computer Networks</h5>{cs356}</div>
        </div>
      </div>
    </div>
  )
}

export default Courses;