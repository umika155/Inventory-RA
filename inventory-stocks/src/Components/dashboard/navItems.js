import React from 'react';
import { Link } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import Ballot from '@material-ui/icons/Ballot';
import LibraryAdd from '@material-ui/icons/LibraryAdd';
import BarChartIcon from '@material-ui/icons/BarChart';
import AssignmentIcon from '@material-ui/icons/Assignment';
import Search from '@material-ui/icons/Search';

import FingerprintIcon from '@material-ui/icons/Fingerprint';
import CardMembershipIcon from '@material-ui/icons/CardMembership'
import * as routes from '../Routes/routes';

const link = { textDecoration: 'none', color: 'initial' };

export const mainNavItems = (
  <div>
    <Link to={routes.HOME} style={link}>
      <ListItem button>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>
    </Link>
    <Link to={routes.ADDPRODUCT} style={link}>
      <ListItem button>
        <ListItemIcon>
          <LibraryAdd />
        </ListItemIcon>
        <ListItemText primary="Add New Product" />
      </ListItem>
    </Link>
    <Link to={routes.ADDFOOTPRINTS} style={link}>
      <ListItem button>
        <ListItemIcon>
          <FingerprintIcon />
        </ListItemIcon>
        <ListItemText primary="Add New Footprint" />
      </ListItem>
    </Link>
    <Link to={routes.ADDSUPPLIERS} style={link}>
      <ListItem button>
        <ListItemIcon>
          <CardMembershipIcon />
        </ListItemIcon>
        <ListItemText primary="Add New Supplier" />
      </ListItem>
    </Link>
    <Link to={routes.CATEGORYLIST} style={link}>
      <ListItem button>
        <ListItemIcon>
          <Ballot />
        </ListItemIcon>
        <ListItemText primary="View Categories" />
      </ListItem>
    </Link>
    <Link to={routes.SEARCH} style={link}>
      <ListItem button>
        <ListItemIcon>
          <Search />
        </ListItemIcon>
        <ListItemText primary="Search" />
      </ListItem>
    </Link>
    <Link to='/recent' style={link}>
    <ListItem button>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
        <ListItemText primary="Recent" />
    </ListItem>
    </Link>
  </div>
);

export const secondaryNavItems = (
  <div>
    <ListSubheader inset>Saved reports</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItem>
  </div>
);
