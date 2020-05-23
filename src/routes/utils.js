
// underscore string function https://github.com/esamattis/underscore.string
export const underscored = str => String(str).trim().replace(/([a-z\d])([A-Z]+)/g, '$1_$2').replace(/[-\s]+/g, '_').toLowerCase();
export const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);
export const humanize = str => capitalize(underscored(str).replace(/_id$/, '').replace(/_/g, ' ').trim());

// export underscored
// export capitalize;
// export humanize;