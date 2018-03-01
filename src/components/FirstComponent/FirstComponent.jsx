import React from 'react';
import { Link } from 'react-router-dom';

const FirstComponent = () => (
  <div>
    <button>
      <Link to="/new">
              New Note
      </Link>
    </button>
    <button>
      <Link to="/save">
              Saved Notes
      </Link>
    </button>
  </div>
);

export default FirstComponent;
