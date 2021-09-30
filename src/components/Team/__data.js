import logo from './../logo/Dark.svg';
import Charlie from './__teammates/Charlie.png'; //last
import Sandra from './__teammates/Sandra.png'; //third
import SandraAlta from './__teammates/SandraAlta.png'; //second
import Joe from './__teammates/Joe.png'; //first


const data = {
    logo,
    block: 'team',
    title: 'Meet the Team',
    description: ' A description about your team goes here. Talk about your values, mission, and anything else you think would be helpful or relevant for investors to know.A description about your team goes here.',
    team:  [
        { name: 'Joe Black', img: Joe, position: 'CEO' },
        { name: 'Sandra Alta', img: SandraAlta, position: 'CMO' },
        { name: 'Sandra Alta', img: Sandra, position: 'CMO' },
        { name: 'Charlie Kelly', img: Charlie, position: 'CMP' },
    ]
}
export default data;
