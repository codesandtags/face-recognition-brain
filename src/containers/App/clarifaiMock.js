export const responseSuccess = {
    "status": {
        "code": 10000,
        "description": "Ok"
    },
    "outputs": [
        {
            "id": "cbda717a00b642bcbe27967f1b3e41cf",
            "status": {
                "code": 10000,
                "description": "Ok"
            },
            "created_at": "2016-11-15T23:25:10Z",
            "model": {
                "name": "face-v1.3",
                "id": "a403429f2ddf4b49b307e318f00e528b",
                "created_at": "2016-10-25T19:30:38Z",
                "app_id": null,
                "output_info": {
                    "message": "Show output_info with: GET /models/{model_id}/output_info",
                    "type": "facedetect"
                },
                "model_version": {
                    "id": "c67b5872d8b44df4be55f2b3de3ebcbb",
                    "created_at": "2016-10-25T19:30:38Z",
                    "status": {
                        "code": 21100,
                        "description": "Model trained successfully"
                    }
                }
            },
            "input": {
                "id": "cbda717a00b642bcbe27967f1b3e41cf",
                "data": {
                    "image": {
                        "url": "https://samples.clarifai.com/face-det.jpg"
                    }
                }
            },
            "data": {
                "regions": [
                    {
                        "region_info": {
                            "bounding_box": {
                                "top_row": 0.22296476,
                                "left_col": 0.6717238,
                                "bottom_row": 0.33909792,
                                "right_col": 0.74911636
                            }
                        }
                    },
                    {
                        "region_info": {
                            "bounding_box": {
                                "top_row": 0.33878392,
                                "left_col": 0.21030195,
                                "bottom_row": 0.48806828,
                                "right_col": 0.3097716
                            }
                        }
                    },
                    {
                        "region_info": {
                            "bounding_box": {
                                "top_row": 0.44855526,
                                "left_col": 0.77092654,
                                "bottom_row": 0.5739084,
                                "right_col": 0.8544279
                            }
                        }
                    }
                ]
            }
        }
    ]
};