// import * as React from 'react';
// import TreeView from '@mui/lab/TreeView';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// import { TreeItem, useTreeItem } from '@mui/x-tree-view/TreeItem';
// import JumboDemoCard from "@jumbo/components/JumboDemoCard";
// import code from "../Treeviews/demo-code/multi-select-tree-view.txt";

// const MultiSelectTreeView = () => {
//     return (
//         <JumboDemoCard title={"Multi Select"} demoCode={code} wrapperSx={{backgroundColor: 'background.paper', pt: 0}}>
//             <TreeView
//                 aria-label="multi-select"
//                 defaultCollapseIcon={<ExpandMoreIcon/>}
//                 defaultExpandIcon={<ChevronRightIcon/>}
//                 multiSelect
//                 sx={{height: 216, flexGrow: 1, maxWidth: 400, overflowY: 'auto'}}
//             >
//                 <TreeItem nodeId="1" label="Applications">
//                     <TreeItem nodeId="2" label="Calendar"/>
//                     <TreeItem nodeId="3" label="Chrome"/>
//                     <TreeItem nodeId="4" label="Webstorm"/>
//                 </TreeItem>
//                 <TreeItem nodeId="5" label="Documents">
//                     <TreeItem nodeId="6" label="MUI">
//                         <TreeItem nodeId="7" label="src">
//                             <TreeItem nodeId="8" label="index.js"/>
//                             <TreeItem nodeId="9" label="tree-view.js"/>
//                         </TreeItem>
//                     </TreeItem>
//                 </TreeItem>
//             </TreeView>
//         </JumboDemoCard>
//     );
// };
// export default MultiSelectTreeView;
