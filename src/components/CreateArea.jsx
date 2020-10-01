import React,{useState} from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';
function CreateArea(props) {

    const [notes,setNotes]=useState({
        title:"",
        content:""
      });
    return (
        
        <div>
       <form autocomplete="off" className= "create-note">
               {bool&&<input name="title" placeholder="Title"  value={notes.title} onChange={handleChange}/>}
               <textarea name="content" placeholder="Take a note..." rows={bool===false?"1":"3"} value={notes.content} onChange={handleChange} onClick={handleClick} />
              <Zoom in = {!bool?false:true}><Fab onClick= {(event)=>
               {
                   props.onClicked(notes);
                   setNotes({
                       title:"",
                       content:"" 
                   }
                  );
                  setBool(false);
       event.preventDefault();
       }}><AddIcon/></Fab></Zoom> 
             </form>
           </div>
         );
       }