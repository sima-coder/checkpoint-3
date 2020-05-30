import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './Form.css'

const Form = () => {
    return (
        <>
       <div class="container">
            <div class="row">
                <div class="col-6 offset-3">
                    <form class="form" action="#" method="post">
                        <fieldset>
                            <legend>Inscription</legend>
                            <div class="form-group" >
                                <label for="name">Email address <span>*</span></label>
                                <input class="form-control" type="email" id="email" name="email" placeholder="Enter email" required/>
                            </div>
            
                            <div class="form-group">
                                <label for="pw">Password <span>*</span></label>
                                <input class="form-control" type="password" id="pw" name="pw" placeholder="Enter password" required/>
                            </div>

                            <div class="form-group">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="check"/>
                                    <label class="form-check-label" for="check">Check me out</label>
                                </div>
                            </div>
                            
                            <button class="btn btn-info" type="submit">Sign in</button>
                        </fieldset>   
                    </form> 
                </div>
            </div>
        </div>   
        </>
    )
}

export default Form