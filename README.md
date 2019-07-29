# apache-ignite-log-pretty-printer

A pretty-printer for apache ignite logs:

Turns this:
> `
Failed to map task jobs to nodes (topology projection is empty): GridTaskSessionImpl [taskName=o.a.i.i.processors.service.GridServiceProxy$ServiceProxyCallable, dep=LocalDeployment [super=GridDeployment [ts=1564386484652, depMode=CONTINUOUS,clsLdrId=e0453bc3c61-f3250f02-8aaf-4cb4-b84a-16822eecca8f, userVer=0, loc=true, sampleClsName=java.lang.String, pendingUndeploy=false, undeployed=false, usage=0]], taskClsName=o.a.i.i.processors.service.GridServiceProxy$ServiceProxyCallable, sesId=3cb59f24c61-f3250f02-8aaf-4cb4-b84a-16822eecca8f, startTime=1564421128181, endTime=9223372036854775807, taskNodeId=f3250f02-8aaf-4cb4-b84a-16822eecca8f, closed=false, cpSpi=null, failSpi=null, loadSpi=null, usage=1, fullSup=false, internal=false, topPred=null, subjId=f3250f02-8aaf-4cb4-b84a-16822eecca8f, mapFut=IgniteFuture [orig=GridFutureAdapter [resFlag=0, res=null, startTime=1564421128181, endTime=0, ignoreInterrupts=false, state=INIT]]]
`

To this:
```
Failed to map task jobs to nodes (topology projection is empty): GridTaskSessionImpl [
    taskName=o.a.i.i.processors.service.GridServiceProxy$ServiceProxyCallable,
    dep=LocalDeployment [
        super=GridDeployment [
            ts=1564386484652,
            depMode=CONTINUOUS,
            clsLdrId=e0453bc3c61-f3250f02-8aaf-4cb4-b84a-16822eecca8f,
            userVer=0,
            loc=true,
            sampleClsName=java.lang.String,
            pendingUndeploy=false,
            undeployed=false,
            usage=0
        ]
    ],
    taskClsName=o.a.i.i.processors.service.GridServiceProxy$ServiceProxyCallable,
    sesId=3cb59f24c61-f3250f02-8aaf-4cb4-b84a-16822eecca8f,
    startTime=1564421128181,
    endTime=9223372036854775807,
    taskNodeId=f3250f02-8aaf-4cb4-b84a-16822eecca8f,
    closed=false,
    cpSpi=null,
    failSpi=null,
    loadSpi=null,
    usage=1,
    fullSup=false,
    internal=false,
    topPred=null,
    subjId=f3250f02-8aaf-4cb4-b84a-16822eecca8f,
    mapFut=IgniteFuture [
        orig=GridFutureAdapter [
            resFlag=0,
            res=null,
            startTime=1564421128181,
            endTime=0,
            ignoreInterrupts=false,
            state=INIT
        ]
    ]
]
```

## Usage

1. Open VSCode's command palette
2. Choose 'Ignite Pretty Print'
3. Profit


## Releases

### 1.0.0

Initial release.