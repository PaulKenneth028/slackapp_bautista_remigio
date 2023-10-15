import Link from "next/link";
import Login from "./login/page";
import Signup from "./signup/page";
import Image from "next/image";
import "./home.css";

export default function Home() {
  return (
    <>
      <section className="flex justify-around items-center">
        <div>
          <Image
            src={"/Images/slackski-hL5cfOnWY.png"}
            alt={"Logo"}
            width={100}
            height={80}
            className="ml-5"
          />
        </div>
        <div
          className="flex"
          style={{
            width: "500px",
            justifyContent: "space-evenly",
          }}
        >
          <Link
            href={"./About"}
            style={{
              border: "1px solid black",
              marginBottom: "3px",
              width: "100px",
              textAlign: "center",
              borderRadius: "50px",
            }}
          >
            About
          </Link>
          <Link
            href={"./Contact"}
            style={{
              border: "1px solid black",
              marginBottom: "3px",
              width: "100px",
              textAlign: "center",
              borderRadius: "50px",
            }}
          >
            Contact Us
          </Link>
          <Link
            href={"./Updates"}
            style={{
              border: "1px solid black",
              marginBottom: "3px",
              width: "100px",
              textAlign: "center",
              borderRadius: "50px",
            }}
          >
            Updates
          </Link>
        </div>
        <div
          className="flex"
          style={{
            width: "500px",
            justifyContent: "space-evenly",
          }}
        >
          <Link
            href={"./login"}
            className="btn w-64 rounded-full bg-violet-400 text-black "
          >
            Sign-in
          </Link>
          <Link
            href={"./signup"}
            className="btn w-64 rounded-full bg-violet-400 text-black"
          >
            Sign-up
          </Link>
        </div>
      </section>
      <div className="homefeatures">
        <Image
          src={"/Images/communitycommunication.png"}
          alt={"Logo"}
          width={1000}
          height={828}
          id="imgLogo1"
        />
        <Image
          src={"/Images/pngegg(2).png"}
          alt={"Logo"}
          width={250}
          height={100}
          id="imgLogo2"
        />
        <Image
          src={"/Images/pngwing.png"}
          alt={"Logo"}
          width={230}
          height={180}
          id="imgLogo3"
        />
        <div style={{ marginTop: "15px" }}>
          <ul>
            <li className="features">
              Empower Your Team with Seamless Communication.
            </li>
            <li className="features">
              Connecting Teams, One Message at a Time.
            </li>
            <li className="features">Simplify Work, Amplify Results.</li>
            <li className="features">Bringing Teams Closer, Virtually.</li>
            <li className="features">Where Work Happens, Together.</li>
            <li className="features">
              Your Team&apos;s Secret to Productivity.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
