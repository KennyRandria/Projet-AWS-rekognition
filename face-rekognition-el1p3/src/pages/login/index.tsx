import React, { useRef, useState } from "react";
import AntInput from "../../components/input";
import { Button } from "antd";
import { Link } from "react-router-dom";
import { axiosGget, login } from '../../hooks';
import './style.scss';

export default function Login() {

      const [token, setToken] = useState<string>("");
      const [tokenUseur, setTokenUsern] = useState<any>();
  
    const ProjectUrl: string = "http://localhost:3000";
    const functionLogToken = () => {
      
      axiosGget('/whoami',token,setTokenUsern,()=>{},()=>{})
      console.log(tokenUseur);
      
      if (tokenUseur.role==="MANAGER2"||tokenUseur.role==="TEACHER") {
        localStorage.setItem("user", JSON.stringify({accessToken:token,username:"ezra"}));
        window.location.href=(ProjectUrl+"/new-event");
      }
    }

    const submitBtn = (e:object) => {
      functionLogToken();
      console.log(e);
      
    }
    return(
        <div className="loginContainer">
            <div className="login">
                <h1>Se connecter avec token</h1>
                <AntInput label="Token" name="token" value={token} ></AntInput>
                  <Link to="/home">
                      <Button type="primary" onClick={submitBtn}>
                          Connecter
                      </Button>
                  </Link>
                
            </div>
        </div>
    //     <>
    //   <section className="h-100 gradient-form sizimg2">
    //     <div className="container py-5 h-100">
    //       <div className="row d-flex justify-content-center align-items-center h-100">
    //         <div className="col-xl-10">
    //           <div className="card rounded-3 text-black">
    //             <div className="row g-0">
    //               <div className="col-lg-6">
    //                 <div className="card-body p-md-5 mx-md-4">

    //                   <div className="text-center">
    //                     {/* <img src={hei}
    //                       alt="logo" className=' sizimg'/>
    //                     <h4 className="mt-1 mb-5 pb-1">{"Se connecter"}</h4>
    //                   </div> */}

    //                   <Form>

    //                     <Form.Group className="form-outline mb-4">

    //                       <Form.Control 
    //                         className="form-control"
    //                         name="username"  type="text" 
    //                         placeholder="Entrer l'Identifiant"  
    //                         value={username} 
    //                         onChange={(e)=>{setUsername(e.target.value)} }
    //                       />
    //                       <Form.Label className="form-label" 
    //                           htmlFor="username" 
    //                       >Identifiant</Form.Label>
    //                     </Form.Group>

    //                     <Form.Group className="form-outline mb-4">

    //                       <Form.Control 
    //                         name="password"  type="password" 
    //                         placeholder="Entrer le Mot de passe" 
    //                         value={password} 
    //                         onChange={(e)=>{setPassword(e.target.value)}}
    //                         className="form-control" />
    //                       <Form.Label className="form-label" 
    //                           htmlFor="password" 
    //                         >Mot de passe: </Form.Label>
    //                       </Form.Group>
    //                     <Form.Group className="text-center pt-1 mb-5 pb-1">
    //                       <Button className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="button"  onClick={(e)=>{functionLog(username, password)}}>CONNEXION</Button>
    //                     </Form.Group>

    //                   </Form>

    //                   <Form>

    //                     <Form.Group className="form-outline mb-4">

    //                       <Form.Control 
    //                         className="form-control"
    //                         name="token"  type="text" 
    //                         placeholder="Entrer l'Identifiant"  
    //                         value={token} 
    //                         onChange={(e)=>{setToken(e.target.value)} }
    //                       />
    //                       <Form.Label className="form-label" 
    //                           htmlFor="token" 
    //                       >Token</Form.Label>
    //                     </Form.Group>

    //                     <Form.Group className="text-center pt-1 mb-5 pb-1">
    //                       <Button className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="button"  
    //                       onClick={(e)=>{functionLogToken()}}>
    //                         CONNEXION AVEC TOKEN
    //                         </Button>
    //                     </Form.Group>

    //                   </Form>

    //                 </div>
    //               </div>
    //               <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
    //                 <div className="text-white px-3 py-4 p-md-5 mx-md-4">
    //                   <h4 className="mb-4">0 Vulnérabilité</h4>
    //                   <p className="small mb-0">
    //                   Crashtest nous scanne, mais ne trouve rien !
    //                   </p>
    //                   <h3 className="small mb-0">
    //                   {". "}
    //                   </h3>
    //                   <h4 className="mb-4">250,000,000 Utilisateurs</h4>
    //                   <p className="small mb-0">
    //                   Onboarder tout Madagascar ? Dix fois sans problème.
    //                   </p>
    //                   <h3 className="small mb-0">
    //                   {". "}
    //                   </h3>

    //                   <h4 className="mb-4">1 Seconde</h4>
    //                   <p className="small mb-0">
    //                   Pire réponse de notre API au percentile 97.
    //                   </p>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    // </>
    )
}