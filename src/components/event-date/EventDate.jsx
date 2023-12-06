import   './EventDate.css';


function EventDate() {
 
  
  return (
    <div className='Agenda-section '>
       <div className=" section flex flex-col items-center justify-center">
       <div className='event' initial={{ y: -70, opacity: 0 }} animate={{ y: 1, opacity: 1 }}>
          <h1
          className="event  text-gradient bg-gradient-to-r from-[#1ABE6C] to-[#03BAE4] text-transparent bg-clip-text tracking-wide text-lg p-2 text-center"
         
           >
          EVENT DATE
          </h1>
        <h2
          className="event text-[#E6F4F3] tracking-wide text-4xl text-center"
          
        >
          14, 15, 16 DECEMBER
        </h2>
      </div>
    
   
        <div className="flex items-center justify-center">
        <table className="table-auto text-white mt-3 "  initial="hidden" animate="visible">
    
         <thead >
         <tr >
            <th >
              <p>SUN</p>
            </th>
            <th>
              <p>MON</p>
            </th>
            <th>
              <p>TUE</p>
            </th>
            <th>
              <p>WED</p>
            </th>
            <th 
                className=" day-header"
              
                initial="hidden"
                >
              <p>THU</p>
            </th>
            <th 
                className="day-header"
               
                initial="hidden"
               >
              <p>FRI</p>
            </th>
            <th 
                className="day-header"
               
                initial="hidden"
               >
              <p>SAT</p>
            </th>
            <th>
              <p> </p>
            </th>
          </tr>
        </thead>
        
        <tbody >
        <tr >
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
          <tr>
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
          <tr>
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
            
            <td  initial="hidden"  className='date'>
             <p> 14</p>
            </td>

            <td  initial="hidden"  className=" date">
              <p>15</p>
            </td>
            <td  initial="hidden"  className=" date">
              <p>16</p>
            </td>
          </tr>
          <tr>
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
