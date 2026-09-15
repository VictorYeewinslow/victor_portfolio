/* eslint-disable react/jsx-key */
import { memo, useEffect, useRef } from "react";
import gsap from "gsap";
import SplitText from "gsap/src/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Play } from "lucide-react";

gsap.registerPlugin(SplitText, ScrollTrigger);

const SectionShowreel = () => {
  const videoRef = useRef();
  const playButtonRef = useRef();
  const showreelItemRef1 = useRef();
  const showreelItemRef2 = useRef();
  const showreelItemRef3 = useRef();
  const showreelItemRef4 = useRef();
  // console.log("here");

  useEffect(() => {
    gsap.to(videoRef.current, {
      rotateY: "0deg",
      scale: "1",
      rotateX: "0deg",
      translateY: "0vh",
      overwrite: true,
      // scrollTrigger: {
      //   trigger: ".showreel",
      //   start: "top bottom",
      //   end: "top top",
      //   scrub: true,
      //   markers: false,
      // },
    });

    gsap.to(showreelItemRef1.current, {
      overwrite: true,
      delay: 0,
      opacity: 1,
      filter: "blur(0px)",
      duration: 1,
      ease: "power1",
      scrollTrigger: { trigger: showreelItemRef1.current, start: "top 95%" },
    });
    gsap.to(showreelItemRef2.current, {
      delay: 0.1,
      opacity: 1,
      overwrite: true,
      filter: "blur(0px)",
      duration: 1,
      ease: "power1",
      scrollTrigger: { trigger: showreelItemRef2.current, start: "top 95%" },
    });
    gsap.to(showreelItemRef3.current, {
      delay: 0.2,
      opacity: 1,
      filter: "blur(0px)",
      duration: 1,
      overwrite: true,
      ease: "power1",
      scrollTrigger: { trigger: showreelItemRef3.current, start: "top 95%" },
    });
    gsap.to(showreelItemRef4.current, {
      delay: 0.3,
      opacity: 1,
      filter: "blur(0px)",
      duration: 1,
      overwrite: true,
      ease: "power1",
      scrollTrigger: { trigger: showreelItemRef4.current, start: "top 95%" },
    });

    let mouseX = 0;
    let mouseY = 0;
    let buttonX = 0;
    let buttonY = 0;
    const speed = 0.05;

    const handleMouseMove = (event) => {
      mouseX = (event.clientX / window.innerWidth) * 100 - 50;
      mouseY = (event.clientY / window.innerHeight) * 100 - 50;
    };

    const animate = () => {
      const distX = mouseX - buttonX;
      const distY = mouseY - buttonY;

      buttonX += distX * speed;
      buttonY += distY * speed;

      if (playButtonRef.current) {
        playButtonRef.current.style.transform = `translate(${buttonX}px, ${buttonY}px)`;
      }

      requestAnimationFrame(animate);
    };

    animate();

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section className="showreel">
      <div className="showreel-content">
        <div className="showreel-content-container">
          <div className="showreel-video-playbutton" ref={playButtonRef}>
            <Play fill="#010101" className="showreel-video-playbutton-icon" />
          </div>
          <div ref={videoRef} className="showreel-content-videobox">
            <div className="background">
              <div className="trail"></div>
            </div>
            <video
              src="/videos/ese.mp4"
              className="showreel-content-video"
              autoPlay="autoplay"
              muted
              playsInline={true}
              data-wf-ignore="true"
              preload="auto"
              loop
            />
          </div>
        </div>
        <div className="text-white text-center text-7xl font-bold mt-12">
          My Work Experience
        </div>
        <div className="showreel-content-row">
          <div
            className="showreel-content-row-item opacity-blur"
            ref={showreelItemRef1}
          >
            <img
              src="/images/Google-Logo.webp"
              className="showreel-content-row-item-image"
              alt=""
            />
            <div className="showreel-content-row-item-grid" />
          </div>
          <div
            className="showreel-content-row-item opacity-blur"
            ref={showreelItemRef2}
          >
            <img
              src="/images/microsoft-logo.png"
              className="showreel-content-row-item-image"
              alt=""
            />
            <div className="showreel-content-row-item-grid" />
          </div>
          <div
            className="showreel-content-row-item opacity-blur"
            ref={showreelItemRef3}
          >
            
            <img
              src="/images/Garmin-Logo.png"
              className="showreel-content-row-item-image"
              alt=""
            />
            <div className="showreel-content-row-item-grid" />
          </div>
          <div
            className="showreel-content-row-item opacity-blur"
            ref={showreelItemRef4}
          >
            <img
              src="/images/microsoft-logo.png"
              className="showreel-content-row-item-image"
              alt=""
            />
            <div className="showreel-content-row-item-grid" />
          </div>
        </div>
        <div>
          {/*<!-- Component: Alternative Changelog feed --> */}
          <ul
            aria-label="Alternative changelog feed"
            role="feed"
            className="relative flex flex-col gap-12 py-12 pl-6 text-sm before:absolute before:top-0 before:left-6 before:h-full before:-translate-x-1/2 before:border before:border-dashed before:border-zinc-500 after:absolute after:top-6 after:left-6 after:bottom-6 after:-translate-x-1/2 after:border after:border-zinc-700 lg:pl-0 lg:before:left-[8.5rem] lg:after:left-[8.5rem]"
          >
            <li
              role="article"
              className="relative pl-6 before:absolute before:left-0 before:top-2 before:z-10 before:h-2 before:w-2 before:-translate-x-1/2 before:rounded-full before:bg-zinc-500 before:ring-2 before:ring-white lg:flex lg:gap-12 lg:pl-0 lg:before:left-[8.5rem]"
            >
              <h4 className="hidden text-2xl text-center font-medium leading-7 text-zinc-400 lg:block lg:w-28 ">
                2026
              </h4>
              <div className="flex flex-col flex-1 gap-2">
                <h3 className="text-2xl font-medium leading-7 text-zinc-200">
                Senior Staff AI/ML Software Engineer (Google)
                  <span className="font-normal text-zinc-400 lg:hidden">
                    {" "}
                    - 2026
                  </span>
                </h3>
                <ul className="pl-5 list-disc text-zinc-400 text-xl marker:text-zinc-500">
                  <li>
                  Led architecture and hands-on delivery of large-scale distributed platforms spanning Java/Spring Boot, Python/FastAPI, Go/gRPC, C#/.NET, React/Next.js, TypeScript, Kafka, PostgreSQL, Redis, BigQuery, and cloud-native services.   
                  </li>
                  <li>
                  Designed production AI-enabled applications using RAG, structured LLM outputs, MCP/tool integrations, deterministic business rules, authorization controls, human approvals, evaluation gates, and observable fallback behavior.
                  </li>
                  <li>
                 Architected event-driven systems using Kafka and Google Pub/Sub with partitioning, bounded concurrency, backpressure, idempotency, retries, dead-letter recovery, replay, schema evolution, and explicit source-of-truth ownership.  
                  </li>
                  <li>
                  Built cloud-native production platforms on GCP using GKE, Cloud Run, BigQuery, Dataflow, Pub/Sub, Cloud SQL, Cloud Storage, IAM/KMS, Docker, Kubernetes, Helm, and Terraform, with AWS and Azure interoperability implementations.
                  </li>
                  <li>
                 Delivered full-stack enterprise applications with React, Next.js, Angular, TypeScript, Node.js/NestJS, REST, GraphQL, WebSockets, OpenAPI, and role-aware workflows supporting operational and AI-assisted use cases.
                  </li>
                  <li>
                 Built and operated data platforms using BigQuery, Apache Beam/Dataflow, Spark/PySpark, Databricks, Delta Lake, Airflow/Composer, Snowflake, dbt, and governed batch/streaming pipelines with lineage, quality, and replay controls.
                  </li>
                  <li>
	               Drove production reliability through OpenTelemetry, structured logging, Prometheus/Grafana, SLOs, load and fault testing, performance profiling, incident RCA, runbooks, staged deployment, canary releases, and rollback strategies.                  </li>
                   <li>
                Owned Staff-level technical direction across architecture, service boundaries, API/data contracts, security, performance, production readiness, code/design reviews, mentoring, cross-team dependencies, and long-term operational ownership.
                  </li>
                   <li>
                  Orchestrated LangGraph and MCP-style orchestration workflows for stateful multi-agent execution, governed tool invocation, workflow routing, shared context management, retries, fallback handling, and auditable enterprise AI interactions.
                  </li>
                   <li>
                  Engineered enterprise RAG and retrieval workflows using LlamaIndex, Milvus, OpenSearch, Redis caching, semantic ranking, and evaluation of AWS Kendra for governed enterprise document retrieval and conversational AI systems.
                  </li>
                   <li>
                  Evaluated LLaMA-family experimentation workflows using LoRA/PEFT fine-tuning and quantization strategies to improve domain adaptation, inference efficiency, and cost-performance optimization.
                  </li>
                </ul>
              </div>
            </li>
            <li
              role="article"
              className="relative pl-6 before:absolute before:left-0 before:top-2 before:z-10 before:h-2 before:w-2 before:-translate-x-1/2 before:rounded-full before:bg-zinc-500 before:ring-2 before:ring-white lg:flex lg:gap-12 lg:pl-0 lg:before:left-[8.5rem]"
            >
              <h4 className="hidden text-2xl text-center font-medium leading-7 text-zinc-400 lg:block lg:w-28 ">
                2014
              </h4>
              <div className="flex flex-col flex-1 gap-2">
                <h3 className="text-2xl font-medium leading-7 text-zinc-200">
                Senior Software Development Engineer (Microsoft)
                  <span className="font-normal text-zinc-400 lg:hidden">
                    {" "}
                    - 2021
                  </span>
                </h3>
                <ul className="pl-5 list-disc text-zinc-400 text-xl marker:text-zinc-500">
                  <li>
                  Built and modernized production C#/.NET and ASP.NET services for search, telemetry, administration, enterprise integration, and distributed content-processing platforms.                  </li>
                  <li>
Designed asynchronous processing architectures using Azure Service Bus, Blob Storage, Table Storage, Azure SQL, queues, durable state, bounded retries, backpressure, reconciliation, and deterministic replay.                  </li>
                  <li>
Developed distributed C++ and C# processing components with multithreaded workers, bounded queues, checkpointing, failure isolation, partitioning, and recovery for high-volume content and search workloads.                  </li>
                  <li>
Modernized SOAP/WCF integrations behind versioned REST APIs while preserving backward compatibility, defining validation, authentication, pagination, error handling, throttling, and migration contracts.                  </li>
                  <li>
Diagnosed complex production issues using ETW traces, crash dumps, performance counters, request logs, queue telemetry, SQL Server execution plans, and CPU, memory, locking, I/O, and dependency-latency analysis.                  </li>
                                    <li>
Designed and tuned SQL Server and Azure SQL schemas, stored procedures, indexes, retention strategies, transactions, connection usage, caching, and execution plans for operational and analytical workloads.                  </li>
<li>
Built Python diagnostic, reconciliation, and analytics utilities alongside ASP.NET operational portals supporting deployment evidence, replay, defect triage, reporting, and production investigation.         </li>
         <li>
Strengthened release engineering and operational reliability through automated builds and tests, TFS/MSBuild/PowerShell pipelines, staged deployments, rollback controls, fault-injection testing, incident RCA, and production-support handoff.
                </li>
                </ul>
              </div>
            </li>
            <li
              role="article"
              className="relative pl-6 before:absolute before:left-0 before:top-2 before:z-10 before:h-2 before:w-2 before:-translate-x-1/2 before:rounded-full before:bg-zinc-500 before:ring-2 before:ring-white lg:flex lg:gap-12 lg:pl-0 lg:before:left-[8.5rem]"
            >
              <h4 className="hidden text-2xl text-center font-medium leading-7 text-zinc-400 lg:block lg:w-28 ">
                2012
              </h4>
              <div className="flex flex-col flex-1 gap-2">
                <h3 className="text-2xl font-medium leading-7 text-zinc-200">
                Technical Lead Software Engineer  (Garmin)
                  <span className="font-normal text-zinc-400 lg:hidden">
                    {" "}
                    - 2018
                  </span>
                </h3>
                <ul className="pl-5 list-disc text-zinc-400 text-xl marker:text-zinc-500">
                  <li>
Led backend engineering for connected-device synchronization platforms processing activity, route, device, and user data through resilient distributed workflows.                  </li>
                  <li>
Designed AWS-hosted services using EC2, Elastic Load Balancing, Auto Scaling, S3, RDS, SQS, and CloudWatch for scalable processing, durable storage, asynchronous execution, and production monitoring.                  </li>
                  <li>
Built Java and C++ services for device synchronization, GPS record processing, route enrichment, account synchronization, and backend APIs supporting connected-device applications.                  </li>
                  <li>
Developed geospatial processing workflows with PostgreSQL/PostGIS and GDAL for route geometry, spatial search, map matching, distance calculations, elevation enrichment, and location-based analysis.                  </li>
                  <li>
Implemented resilient processing with checksum validation, duplicate detection, bounded concurrency, idempotent consumers, resumable workflows, retries, dead-letter handling, replay, and malformed-data quarantine.                  </li>
                                  <li>
Built Python/Django operational and reconciliation tools for route inspection, failed-upload analysis, workflow status, device diagnostics, controlled replay, and support investigation.     </li>          
   <li>
Improved system performance and reliability through profiling, concurrency tuning, data-structure changes, SQL/index optimization, caching, soak testing, interrupted-network testing, and realistic device-payload simulations.      </li>
            <li>
Owned technical planning, architecture and code reviews, task decomposition, release readiness, troubleshooting, mentoring, and collaboration across firmware, mobile, cartography, product, quality, and support teams. </li>
                </ul>
              </div>
            </li>
            <li
              role="article"
              className="relative pl-6 before:absolute before:left-0 before:top-2 before:z-10 before:h-2 before:w-2 before:-translate-x-1/2 before:rounded-full before:bg-zinc-500 before:ring-2 before:ring-white lg:flex lg:gap-12 lg:pl-0 lg:before:left-[8.5rem]"
            >
              <h4 className="hidden text-2xl text-center font-medium leading-7 text-zinc-400 lg:block lg:w-28 ">
                2008
              </h4>
              <div className="flex flex-col flex-1 gap-2">
                <h3 className="text-2xl font-medium leading-7 text-zinc-200">
                Software Development Engineer II (Microsoft)
                  <span className="font-normal text-zinc-400 lg:hidden">
                    {" "}
                    - 2014
                  </span>
                </h3>
                <ul className="pl-5 list-disc text-zinc-400 text-xl marker:text-zinc-500">
                  <li>
Built C++ and C#/.NET components for Microsoft’s Windows Live Search content-processing platform, supporting ingestion, normalization, partitioning, and indexing of large-scale content streams.                  </li>
                  <li>
Developed multithreaded processing workers with bounded queues, backpressure, checkpointing, retries, failure isolation, and deterministic replay to improve reliability across distributed batch workflows.                  </li>
                  <li>
Designed internal .NET/WCF service interfaces with versioned contracts, validation, timeouts, serialization controls, and backward-compatibility testing for distributed service integration.                  </li>
                  <li>
Built Python-based analysis and diagnostic utilities plus ASP.NET operational tools for monitoring batch status, parser failures, indexing health, reconciliation, and relevance-test results.                  </li>
                  <li>
Designed and optimized SQL Server schemas, stored procedures, indexes, archival routines, and reporting queries supporting high-volume processing, operational metadata, and troubleshooting.                  </li>
                  <li>
                    Supported production releases and incident response through automated build/test pipelines, performance diagnostics, staged deployment, rollback procedures, root-cause analysis, and cross-team coordination.
                  </li>
                </ul>
              </div>
            </li> 
            {/* <li
              role="article"
              className="relative pl-6 before:absolute before:left-0 before:top-2 before:z-10 before:h-2 before:w-2 before:-translate-x-1/2 before:rounded-full before:bg-zinc-500 before:ring-2 before:ring-white lg:flex lg:gap-12 lg:pl-0 lg:before:left-[8.5rem]"
            >
              <h4 className="hidden text-2xl text-center font-medium leading-7 text-zinc-400 lg:block lg:w-28 ">
                2016
              </h4>
              <div className="flex flex-col flex-1 gap-2">
                <h3 className="text-2xl font-medium leading-7 text-zinc-200">
                Software Developer (Miami Consulting Services, LLC)
                  <span className="font-normal text-zinc-400 lg:hidden">
                    {" "}
                    - 2016
                  </span>
                </h3>
                <ul className="pl-5 list-disc text-zinc-400 text-xl marker:text-zinc-500">
                  <li>
                  Programmed full-stack web applications that processed, analyzed, and visually rendered data for 15+ clients across various industries using Python with Django/Flask for backend data handling and ETL processes, improving data insights by 25%.
                  </li>
                  <li>
                  Managed time-sensitive updates, including content modifications and database upgrades, ensuring minimal downtime (99.9% uptime) and high accuracy with AWS cloud integrations and Docker for containerized deployments.
                  </li>
                  <li>
                  Planned, wrote, and debugged software applications with precision, incorporating secure integrations with APIs and databases using Go for scalable services and Kubernetes for microservices management, reducing bugs by 80%.
                  </li>
                  <li>
                  Applied analytical mindset to handle multiple roles in projects, thriving in fast-paced environments to deliver optimal results while experimenting with early deep learning prototypes in TensorFlow and Hugging Face for GenAI, achieving 90% model accuracy.
                  </li>
                  <li>
                  Liaised with teams and clients to establish productive partnerships, utilizing communication skills to align on goals and requirements for ML-enhanced applications, including HIPAA-aware designs where applicable, completing 10+ joint projects ahead of schedule.
                  </li>
                </ul>
              </div>
            </li>  */}
          </ul>
          {/*<!-- End Alternative Changelog feed --> */}
        </div>
      </div>
    </section>
  );
};

export default memo(SectionShowreel);
