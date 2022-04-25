const ListES = (DS, adomain, aflowp) => {
    const DomainSet = TSFind(DS, "d", adomain);
    for (let mem of DomainSet[1].FS) {
      if (mem.f[0] === aflowp) {
        return mem.f[1].ES;
      }
    }
  };

  // "rules":"for each flow=> for 'command', pickup imagename ;for 'env variables' for each generate -e name=val ;for signature files ,in container ws ,rename files; for runtime parms concatenate name=value with space"
  /*
  ready to generate:
   "success":"docker run --env libv='sharp' --name run_ws  -v $(pwd)/Workcontainer/Workspace:/input/:rw  -v $(pwd)/OUTVOL:/output/:rw  protateio angle=39  ",
  from :
   {"DS":[{"d":["Docker Run",
    {"FS":[{"f":["Choose Image to run",{"ES":[{"imagename":"protateio"}]}]},
        {"f":["Choose Runtime parameters",{"ES":[{"algle":"30"}]}]},
        {"f":["Choose Environment variables",{"ES":[{"libv":"sharp"}]}]},
        {"f":["Choose Signatured inputfiles",{"ES":[{"image.jpg":"Workcontainer/Workspace/hs1.jpg"}]}]},
        {"f":["Choose Signatured outputfiles",{"ES":[]}]}]}]}]
}     
     
  */