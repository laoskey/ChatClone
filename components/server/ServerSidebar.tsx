interface ServerSideBarProps {
  serverId: string;
}
function ServerSidebar({ serverId }: ServerSideBarProps) {
  return <div>{serverId}</div>;
}

export default ServerSidebar;
