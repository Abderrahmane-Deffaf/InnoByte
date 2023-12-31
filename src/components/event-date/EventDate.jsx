import "./EventDate.css";
import { useInView } from "react-intersection-observer";
import bg_bottom from "./../../assets/eventLocation/bg_bottom.png";

function EventDate() {
  const { ref, inView } = useInView();

  return (
    <div className=" section  p-4  ">
      <div className="flex relative min-h-full flex-col   w-full gap-4 items-center justify-center">
        <div className={` ${inView ? "event" : "hidden"} flex flex-col gap-4`}>
          <h1 className="event  text-gradient bg-gradient-to-r from-[#1ABE6C] to-[#03BAE4] text-transparent bg-clip-text tracking-wide text-lg p-2 text-center">
            EVENT DATE
          </h1>
          <h2 className="event text-[#E6F4F3] tracking-wide text-4xl text-center">
            14, 15, 16 DECEMBER
          </h2>
        </div>
        <div ref={ref}></div>
        <div className="flex w-full  items-center justify-center">
          <table className="table-auto  text-white mt-3 ">
            <thead>
              <tr className={`${inView ? "tr" : "hidden"}`}>
                <th className={`${inView ? "th" : "hidden"}`}>
                  <p>SUN</p>
                </th>
                <th className={`${inView ? "th" : "hidden"}`}>
                  <p>MON</p>
                </th>
                <th className={`${inView ? "th" : "hidden"}`}>
                  <p>TUE</p>
                </th>
                <th className={`${inView ? "th" : "hidden"}`}>
                  <p>WED</p>
                </th>
                <th className={` ${inView ? "th" : "hidden"}  day-header`}>
                  <p>THU</p>
                </th>
                <th
                  className={`day-header ${inView ? "th" : "hidden"}`}
                  initial="hidden"
                >
                  <p>FRI</p>
                </th>
                <th
                  className={`day-header ${inView ? "th" : "hidden"}`}
                  initial="hidden"
                >
                  <p>SAT</p>
                </th>
                <th
                  className={`${inView ? "th" : "hidden"} before:top-[20%]`}
                ></th>
              </tr>
            </thead>

            <tbody>
              <tr className={`${inView ? "tr" : "hidden"}`}>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>
                  <p>1</p>
                </td>
                <td>
                  <p>2</p>
                </td>
              </tr>
              <tr className={`${inView ? "tr" : "hidden"}`}>
                <td>
                  <p>3</p>
                </td>
                <td>
                  <p>4</p>
                </td>
                <td>
                  <p>5</p>
                </td>
                <td>
                  <p>6</p>
                </td>
                <td>
                  <p>7</p>
                </td>
                <td>
                  <p>8</p>
                </td>
                <td>
                  <p>9</p>
                </td>
              </tr>
              <tr className={`${inView ? "tr" : "hidden"}`}>
                <td>
                  <p>10</p>
                </td>
                <td>
                  <p>11</p>
                </td>
                <td>
                  <p>12</p>
                </td>
                <td>
                  <p>13</p>
                </td>

                <td className="date">
                  <p> 14</p>
                </td>

                <td className=" date">
                  <p>15</p>
                </td>
                <td className=" date">
                  <p>16</p>
                </td>
              </tr>
              <tr className={`${inView ? "tr" : "hidden"}`}>
                <td>
                  <p>17</p>
                </td>
                <td>
                  <p>18</p>
                </td>
                <td>
                  <p>19</p>
                </td>
                <td>
                  <p>20</p>
                </td>
                <td>
                  <p>21</p>
                </td>
                <td>
                  <p>22</p>
                </td>
                <td>
                  <p>23</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <img src={bg_bottom} alt="button" className="top-image-bg" />
        <img src={bg_bottom} alt="button" className="button-image-bg" />
      </div>
    </div>
  );
}

export default EventDate;
