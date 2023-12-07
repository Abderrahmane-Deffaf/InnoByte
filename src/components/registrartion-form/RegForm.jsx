import React , {useState , useEffect} from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaXmark } from "react-icons/fa6";
import axios from 'axios'
import Form1 from './Form1'
import Form2 from './Form2'
import Form3 from './Form3'
import Form4 from './Form4'
const RegForm = ({show,showHandler}) => {
    const [form, setForm] = useState(1)
    const [loading , setLoading] = useState(false)
    const formHandler = (n) => {
        setForm(n)
    }
    useEffect(() => {
        const handleClickOutside = (event) => {
          if (!event.target.closest('.registration-form')) {
            showHandler(false);
          }
        };
    
        document.addEventListener('mousedown', handleClickOutside);
    
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
      }, [showHandler]);
    const submit = async () => {
        const info = {
            name,
            phoneNumber,
            team,
            institution,
            email,
            teamMembers,
            role,
            skillsDescrption,
            portfolio,
            motivation,
            anythingToAdd
        }
        setLoading(true)
        const rep = await axios.post("http://207.154.212.198/api/v1/addp",info).then((res)=>{
            showHandler(false)
            return toast.success(res.data.msg, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
        }).catch((err)=>{
            return toast.error(err.response.data.msg, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
        })
        setLoading(false)
        
    }
    const [name, setFullname] = useState('') ; 
    const [phoneNumber,setPhoneN] = useState('') ;
    const [team,setTeamName] = useState('') ;
    const [institution,setUniversity] = useState('')
    const [email,setEmail] = useState('')
    const [teamMembers,setTeamMembers] = useState('')
    const [role , setRole] = useState('') ;
    const [skillsDescrption,setSkillLevel] = useState('') ;
    const [portfolio,setPortfolio] = useState('') ; 
    const [motivation , setMotivation] = useState('') ;
    const [anythingToAdd, setAnythingToAdd] = useState('') ;
    const form2 = {
        name,
        phoneNumber,
        team,
        institution,
        email,
        fullnameHandler : (e) => setFullname(e),
        phoneNumberHandler : (e) => setPhoneN(e),
        teamNameHandler : (e) => setTeamName(e),
        universityHandler : (e) => setUniversity(e),
        emailHandler : (e) => setEmail(e),
    }
    const form3 = {
        teamMembers,
        role,
        skillsDescrption,
        portfolio,
        teamMembersHandler : (e) => setTeamMembers(e.target.value),
        roleHandler : (e) => setRole(e),
        skillLevelHandler : (e) => setSkillLevel(e),
        portfolioHandler : (e) => setPortfolio(e),
    }
    const form4 = {
        motivation,
        anythingToAdd,
        motivationHandler : (e) => setMotivation(e.target.value),
        anythingToAddHandler : (e) => setAnythingToAdd(e.target.value),
    }
    const forms = [
        <Form1 formHandler={formHandler}/>,
        <Form2 handlers={form2} formHandler={formHandler}/>,
        <Form3 handlers={form3} formHandler={formHandler}/>,
        <Form4 handlers={form4} loading={loading} submit={submit} formHandler={formHandler} />
    ]
    return (
    <div className={`registration-form  fixed z-50 mt-4 lg:px-[100px] px-2 py-4 lg:pt-[80px] pb-[50px] left-[50%] translate-y-[-50%] translate-x-[-50%] w-[90%] sm:w-[70%] smoth-t shadow-inner-white rounded-3xl ${show?"top-[50%]":"top-[200%]"}`}>
        <FaXmark onClick={()=>showHandler(false)} className=' cursor-pointer absolute top-8 right-12 text-l lg:text-[32px]'/>
        <div className=' z-50 h-full'>
        {
            forms.map((v,i)=>{
                if(i+1==form){
                    return v
                }
            })
        }
        </div>
    </div>
  )
}

export default RegForm