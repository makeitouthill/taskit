router.get('/api/services', (req, res) => {
    service.findAll().then(services => {
        res.json
    }
    );
}
);

router.get('/api/services/:id', (req, res) => {
    service.findByPK(req.params.id).then(service => {
        res.json(service);
    }
    );
}
);

router.post('/api/services', (req, res) => {
    service.create(
        {
            service_name: req.body.service_name,
            description: req.body.description
        }
    )
    .then(service => {
        res.json(service);
    }
    );
}
);

router.put('/api/services/:id', (req, res) => {
    service.update(
        {
            service_name: req.body.service_name,
            description: req.body.description
        },
        {
            where: {
                id: req.params.id
            }
        }
    )
    .then(
        () => {
            service.findByPK(req.params.id).then(service => {
                res.json(service);
            }
            );
        }
    );
}
);

router.delete('/api/services/:id', (req, res) => {
    service.destroy(
        {
            where: {
                id: req.params.id
            }
        }
    )
    .then(() => {
        res.json(
            {
                sucess: true
            }
            );
    }
    );
}
);