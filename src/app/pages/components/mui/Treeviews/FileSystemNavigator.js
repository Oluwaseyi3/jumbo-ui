// import * as React from 'react';
// import TreeView from '@mui/lab/TreeView';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// import { TreeItem, useTreeItem } from '@mui/x-tree-view/TreeItem';
// import JumboDemoCard from "@jumbo/components/JumboDemoCard";
// import code from "../Treeviews/demo-code/file-system-navigation.txt";

// const FileSystemNavigator = () => {
//     return (
//         <JumboDemoCard
//             title={"File System Navigator"}
//             demoCode={code}
//             wrapperSx={{backgroundColor: 'background.paper', pt: 0}}
//         >
//             <TreeView
//                 aria-label="file system navigator"
//                 defaultCollapseIcon={<ExpandMoreIcon/>}
//                 defaultExpandIcon={<ChevronRightIcon/>}
//                 sx={{height: 240, flexGrow: 1, maxWidth: 400, overflowY: 'auto'}}
//             >
//                 <TreeItem nodeId="1" label="Applications">
//                     <TreeItem nodeId="2" label="Calendar"/>
//                 </TreeItem>
//                 <TreeItem nodeId="5" label="Documents">
//                     <TreeItem nodeId="10" label="OSS"/>
//                     <TreeItem nodeId="6" label="MUI">
//                         <TreeItem nodeId="8" label="index.js"/>
//                     </TreeItem>
//                 </TreeItem>
//             </TreeView>
//         </JumboDemoCard>
//     );
// };
// export default FileSystemNavigator;
