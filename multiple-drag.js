/**
 * Angular JS multiple-drag module
 * @author Maksym Pomazan
 * @version 0.0.1
 */
angular.module('multipleDrag', ['multipleSelection'])
    .directive('multipleDragItem', ['$document', function($document) {
        return {
            scope: true,
            restrict: 'A',
            link: function(scope, element, iAttrs, controller) {
                scope.isDraggable = true;
                scope.isDragging = false;

                var startX = 0,
                    startY = 0;

                element.css({
                    position: 'absolute',
                    cursor: 'pointer'
                });
                if (!element.css('top')) {
                    element.css({
                        'top': element.prop('offsetTop') + "px"
                    });
                }
                if (!element.css('left')) {
                    element.css({
                        'left': element.prop('offsetLeft') + "px"
                    });
                }

                element.on('mousedown', function(event) {

                    // Prevent default dragging of selected content
                    event.preventDefault();
                    startX = event.pageX;
                    startY = event.pageY;
                    $document.on('mousemove', mousemove);
                    $document.on('mouseup', mouseup);
                });

                function mousemove(event) {
                    event.preventDefault();
                    event.stopPropagation();
                    var deltaX = event.pageX - startX;
                    var deltaY = event.pageY - startY;
                    var childs = element.parent().children();
                    for (var i = 0; i < childs.length; i++) {
                        child = angular.element(childs[i]);
                        if (child.scope().isDraggable && child.scope().isSelected) {
                            if (!child.scope().isDragging) {
                                child.scope().isDragging = true;
                                child.scope().$apply();
                            }
                            var x = parseInt(child.css('left').replace('px', ''));
                            var y = parseInt(child.css('top').replace('px', ''));
                            child.css({
                                left: (x + deltaX) + 'px',
                                top: (y + deltaY) + 'px'
                            });
                        }
                    }
                    startX = event.pageX;
                    startY = event.pageY;
                }

                function mouseup() {
                    var childs = element.parent().children();
                    for (var i = 0; i < childs.length; i++) {
                        child = angular.element(childs[i]);
                        if (child.scope().isDragging) {
                            child.scope().isDragging = false;
                            child.scope().$apply();
                        }
                    }

                    $document.off('mousemove', mousemove);
                    $document.off('mouseup', mouseup);
                }
            }
        };
    }]);
