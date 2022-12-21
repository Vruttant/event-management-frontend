import Event from "../models/Event";
import Review from "../models/Review";
const EventsData = [
  new Event(
    1,
    "Google DevFest 2022",
    "DevFests are local tech conferences hosted by Google Developer Groups (GDG) around the world. Each DevFest event is crafted by its local organizers to fit the needs and interests of its local developer community. Whether it be through hands-on learning experiences, technical talks delivered in local languages by experts, or by simply meeting fellow local developers, DevFest attendees learn how to build together and innovate on Google's developer tools.",
    "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2127&q=80",
    "Remote",
    "21-12-2022",
    "11:00",
    [
      new Review(
        "3",
        "Laboris deserunt pariatur quis id cillum. Sint veniam magna magna magna eiusmod ullamco cupidatat consectetur ad officia. Ipsum Lorem excepteur aute aliqua incididunt occaecat anim dolor commodo. Quis elit culpa cillum sit. Enim sint id officia minim non culpa voluptate deserunt amet fugiat fugiat."
      ),
      new Review(
        "5",
        "Laboris deserunt pariatur quis id cillum. Sint veniam magna magna magna eiusmod ullamco cupidatat consectetur ad officia. Ipsum Lorem excepteur aute aliqua incididunt occaecat anim dolor commodo. Quis elit culpa cillum sit. Enim sint id officia minim non culpa voluptate deserunt amet fugiat fugiat.!"
      ),
    ]
  ),

  new Event(
    2,
    "Quantum Computers - An introductory session",
    "Here is the agenda for the discussion:- 1. Member's introduction 2. What are quantum computers? 3. Classical computers vs. quantum computers 4. Schrodinger's cat and qubit 5. Evolution of classical computers vs evolution of quantum computers",
    "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    "Appointy, Bhopal",
    "28-12-2022",
    "15:00",
    [new Review("1", "Poor management of the event")]
  ),
  new Event(
    3,
    "Tech Talk on BigData Infrastructure",
    "Hello, Engineers! Welcome to the Meetup held by the ALC Indore community! Today, we'll have a deep tech talk with the engineers from the ApacheSeaTunnel and Devlake project, Goal is to share technical insights and best practices of they in the big data area. If you are a developer, system engineer, or any other IT professional excited about infrastructure technologies, the BigData Infrastructure Webinar will bring you something you want.",
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1115&q=80",
    "Block A, Tech Park, Banglore",
    "03-01-2023",
    "17:00",
    [
      new Review(
        "4",
        "Laboris deserunt pariatur quis id cillum. Sint veniam magna magna magna eiusmod ullamco cupidatat consectetur ad officia. Ipsum Lorem excepteur aute aliqua incididunt occaecat anim dolor commodo. Quis elit culpa cillum sit. Enim sint id officia minim non culpa voluptate deserunt amet fugiat fugiat."
      ),
    ]
  ),

  new Event(
    4,
    "Dart Flutter Master Class",
    "Dart Flutter Chowk has got a lot of fun and knowledgeable stuff for you folks with Rohit Ranjan (A Flutter Dev Library Author and an Open Source Contributor, Startup Bootcamp class of 2022, MLSA).",
    "https://images.unsplash.com/photo-1580894328141-6f3421a182a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2076&q=80",
    "Appointy, Bhopal",
    "29-12-2022",
    "15:00",
    [new Review("1", "Poor management of the event")]
  ),
  new Event(
    5,
    "Google DevFest 2023",
    "DevFests are local tech conferences hosted by Google Developer Groups (GDG) around the world. Each DevFest event is crafted by its local organizers to fit the needs and interests of its local developer community. Whether it be through hands-on learning experiences, technical talks delivered in local languages by experts, or by simply meeting fellow local developers, DevFest attendees learn how to build together and innovate on Google's developer tools.",
    "https://images.unsplash.com/photo-1551808525-51a94da548ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2007&q=80",
    "Remote",
    "09-01-2022",
    "14:00",
    [new Review("4", "Good event")]
  ),

  new Event(
    6,
    "Quantum Computers - Session 2",
    "Here is the agenda for the discussion:- 1. Member's introduction 2. What are quantum computers? 3. Classical computers vs. quantum computers 4. Schrodinger's cat and qubit 5. Evolution of classical computers vs evolution of quantum computers",
    "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    "Appointy, Bhopal",
    "03-01-2022",
    "15:00",
    [new Review("1", "Poor management of the event")]
  ),
];

export default EventsData;
