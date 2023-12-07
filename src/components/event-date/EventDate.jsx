import "./EventDate.css";
import { useInView } from "react-intersection-observer";

function EventDate() {
  const { ref, inView } = useInView();

  return (
    <div className=" section p-4  ">
      <div ref={ref} className="flex flex-col w-full items-center justify-center">
        <div className={` ${inView ? "event" : "hidden"}`}>
          <h1 className="event  text-gradient bg-gradient-to-r from-[#1ABE6C] to-[#03BAE4] text-transparent bg-clip-text tracking-wide text-lg p-2 text-center">
            EVENT DATE
          </h1>
          <h2 className="event text-[#E6F4F3] tracking-wide text-4xl text-center">
            14, 15, 16 DECEMBER
          </h2>
        </div>

        <div className="flex  items-center justify-center">
          <table className="table-auto w-full text-white mt-3 ">
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
                <th className={`${inView ? "th" : "hidden"} before:top-[30%]`}>
                </th>
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

                <td  className=" date">
                  <p>15</p>
                </td>
                <td  className=" date">
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
      </div>
    </div>
  );
}

export default EventDate;
