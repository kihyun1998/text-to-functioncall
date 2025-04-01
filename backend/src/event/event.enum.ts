export enum NodeType {
  Proxy = 'Proxy',
  Agent = 'Agent',
}

export enum NodePlatform {
  Linux = 'Linux',
  Windows = 'Windows',
  HPUX = 'HPUX',
  AIX = 'AIX',
  Solaris = 'Solaris',
  Network = 'Network',
  Web = 'Web',
  VNC = 'VNC',
}

export enum EventType {
  Command = '명령',
  SU = 'SU',
  FileWrite = '파일전송-쓰기',
  FileRead = '파일전송-읽기',
  ActiveWindow = '활성창',
}

export enum Protocol {
  SSH = 'SSH',
  SFTP = 'SFTP',
  SCP = 'SCP',
  Telnet = 'Telnet',
  FTP = 'FTP',
  RDP = 'RDP',
  Winrm = 'Winrm',
  Web = 'Web',
}

export enum Result {
  Pass = '통과',
  Warn = '경고',
  Block = '금지',
}
