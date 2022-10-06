import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select'
import './select.css'

function ReusableForm(props) {
  return (
    <React.Fragment>
      
      <form onSubmit={props.formSubmissionHandler}>
        <select> 
          <option selected value="Eli Tomac">Eli Tomac</option>
          <option value="Chase Sexton">Chase Sexton</option>
          <option value="Jason Anderson">Jason Anderson</option>
          <option value="Christian Craig">Christian Craig</option>
          <option value="Ryan Dungey">Ryan Dungey</option>
          <option value="Justin Barcia">Justin Barcia</option>
          <option value="Aaron Plessinger">Aaron Plessinger</option>
          <option value="Benny Bloss">Benny Bloss</option>
          <option value="Dean Wilson">Dean Wilson</option>
          <option value="Shane McElrath">Shane McElrath</option>
          
        </select>
        
        <select> 
          <option value="Eli Tomac">Eli Tomac</option>
          <option selected value="Chase Sexton">Chase Sexton</option>
          <option value="Jason Anderson">Jason Anderson</option>
          <option value="Christian Craig">Christian Craig</option>
          <option value="Ryan Dungey">Ryan Dungey</option>
          <option value="Justin Barcia">Justin Barcia</option>
          <option value="Aaron Plessinger">Aaron Plessinger</option>
          <option value="Benny Bloss">Benny Bloss</option>
          <option value="Dean Wilson">Dean Wilson</option>
          <option value="Shane McElrath">Shane McElrath</option>
          name='mx4501'
        </select>

        <select> 
          <option value="Eli Tomac">Eli Tomac</option>
          <option value="Chase Sexton">Chase Sexton</option>
          <option selected value="Jason Anderson">Jason Anderson</option>
          <option value="Christian Craig">Christian Craig</option>
          <option value="Ryan Dungey">Ryan Dungey</option>
          <option value="Justin Barcia">Justin Barcia</option>
          <option value="Aaron Plessinger">Aaron Plessinger</option>
          <option value="Benny Bloss">Benny Bloss</option>
          <option value="Dean Wilson">Dean Wilson</option>
          <option value="Shane McElrath">Shane McElrath</option>
          name='mx4501'
        </select>
        <select> 
          <option value="Eli Tomac">Eli Tomac</option>
          <option value="Chase Sexton">Chase Sexton</option>
          <option value="Jason Anderson">Jason Anderson</option>
          <option selected value="Christian Craig">Christian Craig</option>
          <option value="Ryan Dungey">Ryan Dungey</option>
          <option value="Justin Barcia">Justin Barcia</option>
          <option value="Aaron Plessinger">Aaron Plessinger</option>
          <option value="Benny Bloss">Benny Bloss</option>
          <option value="Dean Wilson">Dean Wilson</option>
          <option value="Shane McElrath">Shane McElrath</option>
          name='mx4501'
        </select>

        <select> 
          <option value="Eli Tomac">Eli Tomac</option>
          <option value="Chase Sexton">Chase Sexton</option>
          <option value="Jason Anderson">Jason Anderson</option>
          <option value="Christian Craig">Christian Craig</option>
          <option selected value="Ryan Dungey">Ryan Dungey</option>
          <option value="Justin Barcia">Justin Barcia</option>
          <option value="Aaron Plessinger">Aaron Plessinger</option>
          <option value="Benny Bloss">Benny Bloss</option>
          <option value="Dean Wilson">Dean Wilson</option>
          <option value="Shane McElrath">Shane McElrath</option>
          name='mx4501'
        </select>
        <select> 
          <option value="Eli Tomac">Eli Tomac</option>
          <option value="Chase Sexton">Chase Sexton</option>
          <option value="Jason Anderson">Jason Anderson</option>
          <option value="Christian Craig">Christian Craig</option>
          <option value="Ryan Dungey">Ryan Dungey</option>
          <option selected value="Justin Barcia">Justin Barcia</option>
          <option value="Aaron Plessinger">Aaron Plessinger</option>
          <option value="Benny Bloss">Benny Bloss</option>
          <option value="Dean Wilson">Dean Wilson</option>
          <option value="Shane McElrath">Shane McElrath</option>
          name='mx4501'
        </select>

        <select> 
          <option value="Eli Tomac">Eli Tomac</option>
          <option value="Chase Sexton">Chase Sexton</option>
          <option value="Jason Anderson">Jason Anderson</option>
          <option value="Christian Craig">Christian Craig</option>
          <option value="Ryan Dungey">Ryan Dungey</option>
          <option value="Justin Barcia">Justin Barcia</option>
          <option selected value="Aaron Plessinger">Aaron Plessinger</option>
          <option value="Benny Bloss">Benny Bloss</option>
          <option value="Dean Wilson">Dean Wilson</option>
          <option value="Shane McElrath">Shane McElrath</option>
          name='mx4501'
        </select>
        <select> 
          <option value="Eli Tomac">Eli Tomac</option>
          <option value="Chase Sexton">Chase Sexton</option>
          <option value="Jason Anderson">Jason Anderson</option>
          <option value="Christian Craig">Christian Craig</option>
          <option value="Ryan Dungey">Ryan Dungey</option>
          <option value="Justin Barcia">Justin Barcia</option>
          <option value="Aaron Plessinger">Aaron Plessinger</option>
          <option selected value="Benny Bloss">Benny Bloss</option>
          <option value="Dean Wilson">Dean Wilson</option>
          <option value="Shane McElrath">Shane McElrath</option>
          name='mx4501'
        </select>

        <select> 
          <option value="Eli Tomac">Eli Tomac</option>
          <option value="Chase Sexton">Chase Sexton</option>
          <option value="Jason Anderson">Jason Anderson</option>
          <option value="Christian Craig">Christian Craig</option>
          <option value="Ryan Dungey">Ryan Dungey</option>
          <option value="Justin Barcia">Justin Barcia</option>
          <option value="Aaron Plessinger">Aaron Plessinger</option>
          <option value="Benny Bloss">Benny Bloss</option>
          <option selected value="Dean Wilson">Dean Wilson</option>
          <option value="Shane McElrath">Shane McElrath</option>
          name='mx4501'
        </select>
        <select> 
          <option value="Eli Tomac">Eli Tomac</option>
          <option value="Chase Sexton">Chase Sexton</option>
          <option value="Jason Anderson">Jason Anderson</option>
          <option value="Christian Craig">Christian Craig</option>
          <option value="Ryan Dungey">Ryan Dungey</option>
          <option value="Justin Barcia">Justin Barcia</option>
          <option value="Aaron Plessinger">Aaron Plessinger</option>
          <option value="Benny Bloss">Benny Bloss</option>
          <option value="Dean Wilson">Dean Wilson</option>
          <option selected value="Shane McElrath">Shane McElrath</option>
          name='mx4501'
        </select>
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;