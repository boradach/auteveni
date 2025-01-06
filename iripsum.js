// Example object
const ref = {
    parent: {
        name: 'ParentNode'
    },
    name: 'ChildNode'
};

// Check if 'ref' has a 'parent' property
if (ref.parent) {
    console.log('The object has a parent:', ref.parent);
} else {
    console.log('The object does not have a parent.');
}
