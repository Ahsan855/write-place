"use client";
import { Nunito } from "next/font/google";
import Link from "next/link";
import { useState } from "react";
import { GrMenu } from "react-icons/gr";
import { ImCross } from "react-icons/im";
const nunito = Nunito({ subsets: ["latin"], weight: "400" });

export const Contentshow = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="mx-auto flex items-center justify-center flex-row-reverse md:flex-row">
      <GrMenu className="text-2xl" onClick={() => setOpenModal(true)} />
      <div
        className={`fixed flex justify-end my-60 items-center ${
          openModal ? "visible opacity-1 " : "invisible opacity-0"
        }  bg-black/20 duration-100`}
      >
        <div
          className={`absolute top-[52px] overflow-hidden -right-24  p-4  text-center bg-seocundary drop-shadow-2xl  ${
            openModal
              ? "scale-1 opacity-1 duration-300"
              : "scale-0 opacity-0 duration-150"
          }`}
        >
          <ImCross
            className="text-2xl mx-auto mr-0 cursor-pointer"
            onClick={() => setOpenModal(false)}
          />
          <div>
            <div className="flex gap-x-10">
              {/* ul list 1 */}
              <div>
                <h4 class="text-2xl border-b-2 mt-5 mb-5 mr-24 uppercase">
                  Home
                </h4>

                <ul className="text-start">
                  <li>
                    <Link href="/">Home default</Link>
                  </li>
                  <li>
                    <Link href="/">Home page two</Link>
                  </li>
                  <li>
                    <Link href="/">Home page three</Link>
                  </li>
                </ul>
              </div>
              {/* ul list 2 */}
              <div>
                <h4 class="text-2xl border-b-2 mt-5 mb-5 mr-24 uppercase">
                  Archive
                </h4>

                <ul className="text-start">
                  <li>
                    <Link href="/">Default</Link>
                  </li>
                  <li>
                    <Link href="/">List layout</Link>
                  </li>
                  <li>
                    <Link href="/">Grid layout</Link>
                  </li>
                  <li>
                    <Link href="/">Big thumbnail</Link>
                  </li>
                </ul>
              </div>
              {/* ul list 3 */}
              <div>
                <h4 class="text-2xl border-b-2 mt-5 mb-5 mr-24 uppercase">
                  pages
                </h4>

                <ul className="text-start">
                  <li>
                    <Link href="/">Elements</Link>
                  </li>
                  <li>
                    <Link href="/">About</Link>
                  </li>
                  <li>
                    <Link href="/">Contact</Link>
                  </li>
                  <li>
                    <Link href="/">Srarch</Link>
                  </li>
                  <li>
                    <Link href="/">Author</Link>
                  </li>
                  <li>
                    <Link href="/">404</Link>
                  </li>
                </ul>
              </div>
              {/* ul list 4 */}
              <div>
                <h4 class="text-2xl border-b-2 mt-5 mb-5 mr-24 uppercase">
                  single
                </h4>

                <ul className="text-start">
                  <li>
                    <Link href="/">Standard</Link>
                  </li>
                  <li>
                    <Link href="/">Video</Link>
                  </li>
                  <li>
                    <Link href="/">Audio</Link>
                  </li>
                  <li>
                    <Link href="/">Gallery</Link>
                  </li>
                  <li>
                    <Link href="/">Quote</Link>
                  </li>
                  <li>
                    <Link href="/">Image</Link>
                  </li>
                  <li>
                    <Link href="/">No sidebar</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className={`${nunito.className} flex`}>
              {/* ul list 1 */}
              <div className="flex gap-x-10">
                <ul className="text-start">
                  <h4 class="text-2xl border-b-2 mt-5 mb-5 mr-24 uppercase">
                    contact
                  </h4>
                  <li className="text-xl font-medium">
                    <Link href="/">Address</Link>
                  </li>
                  <li>
                    <Link href="/">123 Main Street</Link>
                  </li>
                  <li>
                    <Link href="/">New York, NY 10001</Link>
                  </li>
                  <ul className="text-start mt-5">
                    <li className="text-xl font-medium">
                      <Link href="/">Hours</Link>
                    </li>
                    <li>
                      <Link href="/">
                        Monday—Friday: 9:00AM–
                        <br />
                        5:00PM
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        Saturday & Sunday: 11:00AM– <br />
                        3:00PM
                      </Link>
                    </li>
                  </ul>
                </ul>
              </div>
              {/* ul list 1 */}
              <div className="flex gap-x-10">
                <ul className="text-start">
                  <h4 class="text-2xl border-b-2 mt-5 mb-5 mr-24 uppercase">
                    contact
                  </h4>
                  <li className="text-xl font-medium">
                    <Link href="/">Address</Link>
                  </li>
                  <li>
                    <Link href="/">123 Main Street</Link>
                  </li>
                  <li>
                    <Link href="/">New York, NY 10001</Link>
                  </li>
                  <ul className="text-start mt-5">
                    <li className="text-xl font-medium">
                      <Link href="/">Hours</Link>
                    </li>
                    <li>
                      <Link href="/">
                        Monday—Friday: 9:00AM–
                        <br />
                        5:00PM
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        Saturday & Sunday: 11:00AM–
                        <br />
                        3:00PM
                      </Link>
                    </li>
                  </ul>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
