function  installEventHandlers(selector,event,eventHandler)
			{
				var elems=document.querySelectorAll(selector);
				for (var i=0;i<elems.length;i++)
					{

						elems[i].addEventListener(event,eventHandler);

					}

			}

